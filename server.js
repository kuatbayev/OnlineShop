const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine','ejs');

mongoose.connect('mongodb://127.0.0.1:27017/onlineshop').then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log("Failed to connect to MongoDB");
})

app.use(express.static(__dirname + '/public'))

const onlineshopSchema = new mongoose.Schema({
    product:String,
    price:Number,
    skidka:Number,
    img:
    {
        data: Buffer,
        contentType: String
    }

})

const onlineshop = mongoose.model('onlineshop',onlineshopSchema)


app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/add',(req, res)=>{
    res.render('add');
})

app.get('/edit',(req, res)=>{
    res.render('edit');
})

app.get('/chair',(req, res)=>{
    res.render('chair');
})

app.get('/404',(req, res)=>{
    res.render('404');
})

const PORT = 7000;
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})