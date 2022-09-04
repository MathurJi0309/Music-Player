const express=require('express');
const path=require('path');
const port=8000;

const app=express();
//set the view engine property in the app as ejs
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));


var list=[
    
]
app.get('/',function(req,res){
    return res.render('home',{title:"your todo list"});
})
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return ;
    }
    console.log('Your server is running on the port',port);
})