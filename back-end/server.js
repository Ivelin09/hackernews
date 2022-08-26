const express = require('express')
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const crypto = require('crypto')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/register', (req, res) => {
    console.log("THERE", req.body);

    res.json({token: crypto.randomBytes(48).toString('hex')});
});


app.listen(8000, () => {
    console.log("Server is on");
})