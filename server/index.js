const express = require('express');
const cors = require('cors')
const app = express();
// const bodyParser = require('body-parser')

const PORT = 2340;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/postReview', (req, res)=>{
    console.log(req.body)
});

app.listen(PORT, ()=>{
    console.log(`HTTP port opened on ${PORT}....`)
});
