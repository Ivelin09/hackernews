const express = require('express');
const http = require('http');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const authorization = require('./auth');

const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const map = new Map();

io.on("connection", (socket) => {
    socket.on('connection', (data) => map.set(data, socket.id));
});

const { User, Friend, Blog, STATUS } = require('./userSchema');
const { Socket } = require('socket.io');
const auth = require('./auth');
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cookieParser("secret"));

app.post('/register', async (req, res) => {
    console.log("THERE", req.body);
    const {username, password} = req.body;

    console.log("username", username);

    const token = await jwt.sign({username: username}, 'secret', {expiresIn: 1000*60*30 });
    const doc = new User();
    doc.username = username;
    doc.password = password;

    doc.save().then(() => console.log("saved"));
    console.log(doc);
    res.json({
        message: "success",
        token: token //crypto.randomBytes(48).toString('hex')
    });
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    const query = await User.findOne({ username });
    console.log(query);

    if(!query || query.password != password)
        res.json({ message: 'wrong username or password', code: 403 });
    else
        res.json({ 
            message: 'success',
            token: await jwt.sign({username: username}, 'secret', {expiresIn: 1000*60*30 }), 
            code: 200 });
    console.log(query);
});

app.post('/friendRequest', authorization, async (req, res) => {
    const { recipientName } = req.body;
    const recipientObj = await User.findOne({ username: recipientName });
    console.log(recipientObj, req.sender);
    if(!recipientObj) {
        console.log("hereee");
        res.json({ status: 400, message: "couldn't find such username"});
        return;
    }

    const recipientId = recipientObj._id.toString(); 
    if(map.has(recipientId)) {
        io.to(map.get(recipientId)).emit("send", req.sender);
    }

    const match = await Friend.findOne({requester: req.sender, recipient: recipientObj});

    if(match) {
        console.log("match", match);
        res.json({status: 400, message: "Request already sended"});
        return;
    }

    console.log("sender", req.sender);
    console.log("recipientObj", recipientObj);

    const docA = await Friend.findOneAndUpdate(
        { requester: req.sender._id, recipient: recipientObj._id },
        { $set: {status: STATUS.requested }},
        { upsert: true, new: true }
    );

    console.log("here");
    const docB = await Friend.findOneAndUpdate(
        {requester: req.sender, recipient: recipientObj},
        { $set: { status: STATUS.pending }},
        { upsert: true, new: true }
    );

    console.log("here1");
    const updateSender = await User.findOneAndUpdate(
        { _id: req.sender },
        { $push: { friends: docA._id }}
    );

    console.log("here2");
    const updateRecipient = await User.findOneAndUpdate(
        { _id: recipientObj },
        { $push: { friends: docB._id }}
    );

    console.log("updateSender", updateSender);
    console.log("updateRecipient", updateRecipient);

    res.json({
        status: 200,
        message: "hello"
    });
});

app.get('/userId', authorization, async (req ,res) => {

    res.json({
        status: 200,
        message: req.sender._id.toString()
    })
});

app.get('/pending', authorization, async (req, res) => {
    const data = [];
    Friend.find({}, async (err, friends) => {

        await Promise.all(friends.map(async (friend) => {
            console.log("watch", friend.recipient, req.sender._id);
            if(friend.recipient.toString() == req.sender._id.toString())
            if(friend.status == STATUS.pending) {
                const id = friend.requester;
                data.push((await User.findOne({ id })).username);
            }
        }));
        console.log("data", data);
        res.json({
            status: 200,
            message: data
        })
    });
})

app.get("/friends", authorization, async (req, res) => {
    const data = [];
    Friend.find({}, async (err, friends) => {

        await Promise.all(friends.map(async (friend) => {
            console.log("fr", friend);
            if(friend.status == STATUS.friends)
                data.push(friend.username);
        }));

        res.json({
            status: 200,
            message: data
        })
    });

});

app.post('/createBlog', authorization, async (req, res) => {
    const { title, description } = req.body;

    const blog = new Blog();

    blog.title = title;
    blog.description = description;
    blog.author = req.sender;

    await blog.save();

    res.sendStatus(200);
})

app.post('/blogs', async (req, res) => {
    const data = [];
     Blog.find({}, async (err, blogs) => {

        await Promise.all(blogs.map(async (blog) => {
            data.push({
                title: blog.title,
                author: (await User.findOne({_id: blog.author})).username
            });
        }));

        res.json({
            status: 200,
            blogs: data
        });
    })
    
});

server.listen(8000, () => {
    console.log("Server is on");
})