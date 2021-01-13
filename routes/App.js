const express = require('require');
const app = express();


app.get('/',(req,res)=>{
console.log('hellow world');
    res.send('Hello World');
});