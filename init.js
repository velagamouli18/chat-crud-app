const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res)=>{
    console.log("req success");
})
.catch((err)=>{
    console.log("Error");
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wassup');
}

Chat.insertMany([
    {from : "Dhoni", to : "Mouli", msg : "Hello Mouli" , sent_on : new Date()},
    {from : "Rohit", msg : "Namaste" , sent_on : new Date()},
    {from : "Virat", to : "Anushka", msg : "Hi Anushka" , sent_on : new Date()},
    {from : "Rahul", to : "Athiya", msg : "Hello Athiya" , sent_on : new Date()},
]);