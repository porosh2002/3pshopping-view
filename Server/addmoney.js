const mongoose = require("mongoose");
const Addmoney = new mongoose.Schema({
userid:{
    type:String,
    required:true
},
tid:{
    type:String,
    required:true
},
done:{
    type:Boolean,
    required:true
}
});
