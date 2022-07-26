// const a = 20;
const a = {
    average: (a,b) => {
        console.log((a+b)/2);
    },
    percent: (a,b) => {
        console.log((a/b)*100);
    }

};


module.exports = a;//export this const a so that we can use it anywhere by exporting it in that location