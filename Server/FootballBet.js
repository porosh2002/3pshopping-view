const mongoose = require("mongoose");
const TennisSchema = new mongoose.Schema({
userid:{
    type:String,
    required:true
},
betamount:{
    type:Number,
    required:true
},
betPrice:{
    type:Number,
    required:true
},
betid:{
    type:String,
    required:true
},
betProject_id:{
    type:String,
    required:true
},
done:{
    type:Boolean,
    required:true
}
});
const FootballBetModel = mongoose.model("FootballBET", TennisSchema);
module.exports = FootballBetModel;
