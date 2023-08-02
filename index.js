import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true});

const app = express();
const port = 3000;




app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const itemsSchema = mongoose.Schema({
    name: {
        type:String,
    }
});

const List = mongoose.model("Item", itemsSchema);

const item1 = new List({
    name: "Welcome to todoList"
});
const item2 = new List({
    name: "Try to add some item to the list"
});
const item3 = new List({
    name: "<-- check this on to delete the item" 
});

const defaultItem = [item1, item2 , item3];




app.get("/", (req, res)=>{
    const date = new Date();

    List.find({}).then((foundItems) =>{
        if (foundItems.length === 0){
            List.insertMany(defaultItem).then(()=> {
                console.log("Successfully addded");
            });
            res.redirect("/");
        } else {
            res.render("index.ejs", {
                listTitle: date.getDate() + " / " + date.getMonth() +  " / " + date.getFullYear(),  
                newListItems: foundItems, 
            });
        }


    });
});

app.post("/", (req, res) =>{
    const date = new Date();
    const todoName = req.body.todo;

    const item = new List({
        name: todoName,
    });
    
    item.save();

    res.redirect("/")
});

app.post("/delete", (req, res ) =>{
   const checkItemId = req.body.check;
   List.findByIdAndRemove(checkItemId).then(() =>{
        console.log("deleted succesfully");
   })

   res.redirect("/");
});

app.listen(port , () => {
    console.log(`Server is listening in port ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const dbUrl = "mongodb+srv://shajaazimi:Zpo8hxH00nDkR9dd@shjaazimi.iktj3rc.mongodb.net/?retryWrites=true&w=majority"

const app = express();
const port = 3000;




app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(dbUrl).then(()=>{
    console.log("Connected to the DB");
}).catch((e)=>{
    console.log(e);
})


const itemsSchema = mongoose.Schema({
    name: {
        type:String,
    }
});

const List = mongoose.model("Item", itemsSchema);

const item1 = new List({
    name: "Welcome to todoList"
});
const item2 = new List({
    name: "Try to add some item to the list"
});
const item3 = new List({
    name: "<-- check this on to delete the item" 
});

const defaultItem = [item1, item2 , item3];




app.get("/", (req, res)=>{
    const date = new Date();

    List.find({}).then((foundItems) =>{
        if (foundItems.length === 0){
            List.insertMany(defaultItem).then(()=> {
                console.log("Successfully addded");
            });
            res.redirect("/");
        } else {
            res.render("index.ejs", {
                listTitle: date.getDate() + " / " + date.getMonth() +  " / " + date.getFullYear(),  
                newListItems: foundItems, 
            });
        }


    });
});

app.post("/", (req, res) =>{
    const date = new Date();
    const todoName = req.body.todo;

    const item = new List({
        name: todoName,
    });
    
    item.save();

    res.redirect("/")
});

app.post("/delete", (req, res ) =>{
   const checkItemId = req.body.check;
   List.findByIdAndRemove(checkItemId).then(() =>{
        console.log("deleted succesfully");
   })

   res.redirect("/");
});

app.listen(port , () => {
    console.log(`Server is listening in port ${port}`);
});

