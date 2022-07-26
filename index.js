const a = require('./app');//import the a module from app.js file
const fs = require('fs');
const pokemon = require('pokemon');

console.log('First node');

// console.log(a);
a.average(30,2);//used the function average of a which is defined in app.js file
a.percent(754,1000);
console.log(fs);
fs.readFile('./app.js','utf-8',(err,data)=> {
    if(err){
        return err;
    } else{
        console.log(data);
    }

});

console.log(pokemon.all());