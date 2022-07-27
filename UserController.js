const path = require('path');//use the path module (Build-In module)

const registerUser = (req,res)=>{
    const userFirstname = req.body.firstname;
    const userLastname = req.body.lastname;
    const userCountry = req.body.country;
    res.json({
        success:true,
        firstname: userFirstname,
        lastname: userLastname,
        country: userCountry,
    });
}


const registerForm = (req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));//get the path of the file
}

module.exports = {
    registerUser,
    registerForm
}