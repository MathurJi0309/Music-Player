const express=require('express');
const path=require('path');
const port=8000;

const app=express();
//set the view engine property in the app as ejs
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
//take data from the form and convert into key value pair and put it in to the req.body app.use(express.urlencoded()); is the middle ware here 
app.use(express.urlencoded());
app.use(express.static('assets'));

var todoList=[
    {
    description:"for my",
    category:"other",
    date:"05/05/2022"
}


]
app.get('/',function(req,res){
    return res.render('home',{
        title:"your todo list",
        todo_Lists:todoList
    });
})

app.post('/create-list',function(req,res){
    // return res.redirect('back');
    console.log(req.body);
    todoList.push({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    });
    return res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return ;
    }
    console.log('Your server is running on the port',port);
})