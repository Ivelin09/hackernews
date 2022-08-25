const express = require('express')
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/register', (req, res) => {
    console.log("THERE", req.body);
});


app.listen(8000, () => {
    console.log("Server is on");
})