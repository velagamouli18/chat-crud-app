const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required : true,
    },
    to:{
        type: String,
        default : "Self",
    },
    msg:{
        type:String,
        maxLength:50,
    },
    sent_on:{
        type:Date,
        default : Date.now,
    }
});

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;