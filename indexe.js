const express = require('express');
const app = express();//(Third part module)

// const path = require('path');//use the path module (Build-In module)

const router = require('./Routes');

//use this to use the body with request in below code
const bodyParser = require('body-parser');//(Third part module)
app.use(bodyParser.urlencoded({extended: false}));//app.use:- we define the middleware, we want to use in use() function

app.use(express.json());//for using the json in post request

app.use(router);

const port = 3001;

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+"/index.html"));//get the path of the file
// });

//post API  *** commented this as we created the controller and routes for this seperately
// app.post("/create-user",(req,res)=>{
//     const userFirstname = req.body.firstname;
//     const userLastname = req.body.lastname;
//     const userCountry = req.body.country;
//     res.json({
//         success:true,
//         firstname: userFirstname,
//         lastname: userLastname,
//         country: userCountry,
//     });
// });


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});