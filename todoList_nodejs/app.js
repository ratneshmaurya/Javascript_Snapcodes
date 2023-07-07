const express=require('express');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();

// so that our app can use public folder specified
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs'); //initialising our app with ejs funtionality

app.use(bodyParser.urlencoded({extended:true}))

// connecting our app with mongodb
mongoose.connect("mongodb+srv://first_user:first@cluster0.fw4fs.mongodb.net/todolistDB");

// creating schema
const itemsSchema=new mongoose.Schema({name:String})
// creating model
const itemModel=mongoose.model('Item',itemsSchema);



// creating a items array global so that during app.get we dont suffer an error on rendering
const item1=new itemModel({name:"ratnesh"})
const item2=new itemModel({name:"nilesh"})
const item3=new itemModel({name:"anurag"})
const defaultItems=[item1,item2,item3];



app.get("/",(req,res)=>{
    
    // now here accessing items from db and putting in items variable to be able to use in our app.js
    // here acessing all docs from our collection db
    itemModel.find({},(err,foundItems)=>{
        // if any error occur
        if(err){console.log(err)}

        // if none items in our collection then only add these default items to collection else simple go to render part
        else if(foundItems.length===0){
            itemModel.insertMany(defaultItems,(err)=>{if(err){console.log(err)} else{console.log("successfully saved items to db")}})

            // after saving data to db, then redirect to homePage, i.e it will run again app.get("/"),and now this time it moves to else part and render items on website
            res.redirect("/");
        }
        else{
            res.render("list",{kindOfDay:"today",Newitems:foundItems});
        }
    })
    // calling ejx template
   
})


app.post("/",(req,res)=>{
    
    // taking the value from post request from user and pushing the input value to database by following scheme
    var itemName=req.body.newItem;
    console.log(itemName);
    var item=new itemModel({name:itemName})

    // pushing one item to databse
    item.save();
    // redirecting bakc to main page so that we can see the update without refreshing
    res.redirect("/");
})

app.post("/submit",(req,res)=>{
    console.log(req.body);
    var itemId=req.body.checkbox;
    itemModel.findByIdAndDelete(itemId,(err)=>{if(err){console.log(err)}});
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server started at port 3000");
})
