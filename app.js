//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/update", function (req, res) {
  const index = req.body.index;
  const updatedText = req.body.updatedValue;
  itemlists[index] = updatedText; // Update the corresponding item in the list array
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/delete", function (req, res) {

  //console.log(req.body.list);
    var index = req.body.index;
    Item.findByIdAndDelete(index).then(()=>{
      //Item.deleteOne({name:index}).then(()=>{
        console.log("deleted");
      }).catch((err)=>{
        console.log(err);
      });
      res.redirect("/");
    }
  // itemlists.splice(index, 1); // Remove the corresponding paragraph from the array
  // res.redirect("/"); // Redirect to the homepage
  );

  app.post("/update", function (req, res) {
    const index = req.body.index;
    const updatedText = req.body.updatedValue;
    itemlists[index] = updatedText; // Update the corresponding item in the list array
    res.redirect("/");
  });

app.listen(3001, function() {
  console.log("Server started on port 3000");
});
