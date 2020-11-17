const mongoose = require("mongoose");
const outmoney = new mongoose.Schema({
userid:{
    type:String,
    required:true
},
tid:{
    type:String,
    required:true
},
withamount:{
    type:Number,
    required:true
},
done:{
    type:Boolean,
    required:true
}
});
const outmoneyModel = mongoose.model("with_money",outmoney);
module.exports = outmoneyModel;