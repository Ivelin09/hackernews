const jwt = require("jsonwebtoken");
const { User } = require('./userSchema');

module.exports = async function(req, res, next) {

    if(!req.cookies || !req.cookies.authorization) {
        res.json({
            status: 401,
            message: "unvalid token"
        });
        return;
    }

    const token = jwt.verify(req.cookies.authorization, 'secret');
    
    const senderObj = await User.findOne({ username: token.username });

    console.log("asd", senderObj);
    if(!senderObj)
        res.json({
            status: 401,
            message: "The token you're using is invalid"
        })

    req.sender = senderObj;
    next();
}