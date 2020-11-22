const mongoose = require("mongoose");
const ClubSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
balance:{
    type:Number,
    required:true
}
});
const clubModel = mongoose.model("club", ClubSchema);
module.exports = clubModel;
