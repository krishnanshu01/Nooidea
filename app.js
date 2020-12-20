const express = require('express');

const app = express();

const path = require('path');

const mongoDB = require('./config/db');

const hbs = require('hbs');
const { userInfo } = require('os');

const User = require('./models/User')

mongoDB();



const PORT = process.env.PORT || 5000;

const staticpath = path.join(__dirname , "/public");
const templetspath = path.join(__dirname , "/templets/views");
const partialspath = path.join(__dirname , "/templets/partials");
//middleware
app.use('/css' , express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use('/js' , express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use('/jq' , express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false})); //have to add this line of code to get the data in json format
app.use(express.static(staticpath));
app.set("view engine" , "hbs");
app.set("views" , templetspath);
hbs.registerPartials(partialspath);
//hbs stands for handle bars

app.get('/' , (req , res) => {
    res.render("index");
})

app.post('/' , async(req , res) => {
    try{
      //  res.send(req.body);
        const user = new User(req.body);
        await user.save();
        res.render("index");
    }catch(error){
        res.status(500).send(error);
    }
})



app.listen(PORT , () => {
    console.log(`its working on port number ${PORT}`);
})