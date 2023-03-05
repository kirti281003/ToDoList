const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=[];
app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/",function(req,res)
{   day=date.getDate();
    res.render('list',{data:{day:day , items:items}});
})
app.post("/",function(req,res)
{var item=req.body.itemName;
    console.log(item);
    items.push(item);
    res.redirect("/");
    

})
app.listen(3000,function()
{
    console.log("This is port 3000");
})
