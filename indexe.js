const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const port = 3001;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/create-user",(req,res)=>{
    res.send(`<h1>Firstname:- ${req.body.firstname}</h1> <h1>Lastname:- ${req.body.lastname}</h1> <h1>Country:- ${req.body.country}</h1>`)
})


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});