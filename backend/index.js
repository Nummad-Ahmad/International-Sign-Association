const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const username = 'nummad222';
const password = 'zfjektln';
// const conStr = 'mongodb+srv://nummad222:zfjektln@cluster.ru6rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
const conStr = 'mongodb+srv://nummad:zfjektln@cluster0.motg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(conStr).then(() => console.log("DB")).catch(e => console.log(e));
app.get('/temp', (req, res)=>{
    try{
        res.send('Hello'); 
    }catch(e){
        console.log(e);
    } 
})

app.listen(8000, ()=>{
    console.log('Server started'); 
})