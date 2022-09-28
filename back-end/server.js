const express = require('express')
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const authorization = require('./auth');

const { User, Friend, Blog, STATUS } = require('./userSchema');
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


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
    /*res.cookie("authorization", token, {  
        httpOnly: true,
        signed: true,
        secure: true,
        sameSite:'none',
    });*/

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
            token: await jwt.sign({username: username}, 'secret', {expiresIn: 5000 }), 
            code: 200 })
    console.log(query);
});

app.post('/friendRequest', authorization, async (req, res) => {
    const { recipientName } = req.body;
    const recipientObj = await User.findOne({ username: recipientName });

    if(!recipientObj) {
        console.log("hereee");
        res.json({ status: 400, message: "couldn't find such username"});
        return;
    }

    console.log("recipientObj", recipientObj);

    const docA = await Friend.findOneAndUpdate(
        { requester: req.sender, recipient: recipientObj },
        { $set: {status: STATUS.requested }},
        { upsert: true, new: true }
    );

    const docB = await Friend.findOneAndUpdate(
        {requester: req.sender, recipient: recipientObj},
        { $set: { status: STATUS.pending }},
        { upsert: true, new: true }
    );

    const updateSender = await User.findOneAndUpdate(
        { _id: req.sender },
        { $push: { friends: docA._id }}
    );

    const updateRecipient = await User.findOneAndUpdate(
        { _id: recipientObj },
        { $push: { friends: docB._id }}
    );

    console.log("updateSender", updateSender);
    console.log("updateRecipient", updateRecipient);

    res.send(200);
});

app.post('/createBlog', authorization, async (req, res) => {
    const { title, description } = req.body;

    const blog = new Blog();

    blog.title = title;
    blog.description = description;
    blog.author = req.sender;

    await blog.save();

    res.sendStatus(200);
});

app.post('/blogs', async (req, res) => { 
    const data = [];
     Blog.find({}, async (err, blogs) => {

        await Promise.all(blogs.map(async (blog) => {
            console.log("author", (await User.findOne({_id: blog.author})).username);
            data.push({
                title: blog.title,
                author: (await User.findOne({_id: blog.author})).username
            });

            console.log(data);
        }));

        res.json({
            status: 200,
            blogs: data
        });
    })
    
});
app.listen(8000, () => {
    console.log("Server is on");
})