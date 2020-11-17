const mongoose = require('mongoose');
const TennisSchema = new mongoose.Schema({
    TS_T_A:{
        type:String,
        required:true
    },
    TS_T_B:{
        type:String,
        required:true
    },
    TS_T_A_R_F:{
        type:Number,
        required:true
    },
    TS_T_B_R_F:{
        type:Number,
        required:true
    },
    TS_T_M_P_O:{
        type:Number,
        required:true
    },
    TS_T_M_P_E:{
        type:Number,
        required:true
    },
    TS_T_M_P_O_18:{
        type:Number,
        required:true
    },
    TS_T_M_P_U_18:{
        type:Number,
        required:true
    },
    matchTennisStop:{
        type:Boolean,
        required:true
    }
});
const TennisModel = mongoose.model('Tennis', TennisSchema);
module.exports = TennisModel;