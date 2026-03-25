const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodoverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

let port = 3000;

app.listen(port,(req,res)=>{
    console.log("app is listening on "+port);
})

app.get("/",(req,res)=>{
    res.send("Workingg");
})

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find({});
    console.log(chats);
    res.render("chats.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("newchat.ejs");
})

app.post("/chats",async (req,res)=>{
    let {from,to,msg} = req.body;
    let ch = new Chat({
        from:from,
        to:to,
        msg:msg
    });
    await ch.save();
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

app.patch("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    await Chat.findByIdAndUpdate(id,{msg:msg});
    res.redirect("/chats");
});

app.delete("/chats/:id",async (req,res)=>{
    let{id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

main().then((res)=>{
    console.log("req success");
})
.catch((err)=>{
    console.log("Error");
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wassup');
}


