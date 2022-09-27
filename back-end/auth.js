const jwt = require("jsonwebtoken");
const { User } = require('./userSchema');

module.exports = async function(req, res, next) {
    if(req.path == "/register") {
        next();
        return;
    }
    console.log(req.cookies);
    if(!req.cookies || !req.cookies.authorization) {
        res.json({
            status: 401,
            message: "unvalid token"
        });
        return;
    }

    

    const token = jwt.verify(req.cookies.authorization, 'secret');
    
    const senderObj = await User.findOne({ username: token.username });

    if(!senderObj)
        res.json({
            status: 401,
            message: "The token you're using is invalid"
        })

    req.sender = senderObj;
    next();
}