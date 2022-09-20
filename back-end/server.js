const express = require('express')
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

app.use(cookieParser("secret"));

const { User, Friend, STATUS } = require('./userSchema');
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

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

app.post('/friendRequest', async (req, res) => {
    const senderName = jwt.verify(req.cookies.authorization, 'secret').username;
    const { recipientName } = req.body;

    console.log("BODY", senderName, recipientName );

    const senderObj = await User.findOne({ username: senderName });
    const recipientObj = await User.findOne({ username: recipientName });

    console.log("senderObj", senderObj);
    console.log("recipientObj", recipientObj);

    const docA = await Friend.findOneAndUpdate(
        { requester: senderObj, recipient: recipientObj },
        { $set: {status: STATUS.requested }},
        { upsert: true, new: true }
    );

    const docB = await Friend.findOneAndUpdate(
        {requester: senderObj, recipient: recipientObj},
        { $set: { status: STATUS.pending }},
        { upsert: true, new: true }
    );

    console.log("docA", docA);
    console.log("docB", docB);

    const updateSender = await User.findOneAndUpdate(
        { _id: senderObj },
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


app.listen(8000, () => {
    console.log("Server is on");
})