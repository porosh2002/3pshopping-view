const mongoose = require("mongoose");
const FootballSchema = new mongoose.Schema({
  FB_T_A: {
    type: String,
    required: true,
  },
  FB_T_B: {
    type: String,
    required: true,
  },
  FB_T_A_R: {
    type: Number,
    required: true,
  },
  FB_T_B_R: {
    type: Number,
    required: true,
  },
  FB_T_Half_D: {
    type: Number,
    required: true,
  },
  FB_T_A_W: {
    type: Number,
    required: true,
  },
  FB_T_B_W: {
    type: Number,
    required: true,
  },
  FB_T_F_D: {
    type: Number,
    required: true,
  },
  FB_T_G_E: {
    type: Number,
    required: true,
  },
  FB_T_G_O: {
    type: Number,
    required: true,
  },
  FB_T_P_Y: {
    type: Number,
    required: true,
  },
  FB_T_P_N: {
    type: Number,
    required: true,
  },
  FB_T_M_G_1: {
    type: Number,
    required: true,
  },
  FB_T_M_G_2: {
    type: Number,
    required: true,
  },
  FB_T_M_G_3: {
    type: Number,
    required: true,
  },
  FB_T_M_G_4: {
    type: Number,
    required: true,
  },
  FB_T_M_G_5: {
    type: Number,
    required: true,
  },
  FB_T_M_G_5_M: {
    type: Number,
    required: true,
  }
});
const FootballModel = mongoose.model("Football", FootballSchema);
module.exports = FootballModel;
