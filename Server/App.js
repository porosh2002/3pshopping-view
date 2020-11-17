const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const saltRounds = 10;
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const FootballModel = require('./Football')
const multer = require("multer");
const cors = require("cors");
const RegisterUserModel = require("./Register");
const TennisModel = require('./Tennis')
//
// const whitelist = ['https://wecubs.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const fileupload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
      return cb(new Error("This is not a correct format of the file"));
    cb(undefined, true);
  },
});
//
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(helmet());
//
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  RegisterUserModel.findOne({ email: md5(email) }, (error, result) => {
    if (result) {
      bcrypt.compare(password, result.password, function (err, Passok) {
        if (Passok) {
          res.json(email);
        } else {
          res.sendStatus(400);
        }
      });
    } else {
      res.sendStatus(400);
    }
  });
});
app.post('/api/tenisMatchAdd',(req,res)=>{
  const {
    TS_T_A,
    TS_T_B,
    TS_T_A_R_F,
    TS_T_B_R_F,
    TS_T_M_P_O,
    TS_T_M_P_E,
    TS_T_M_P_O_18,
    TS_T_M_P_U_18
  }=req.body;
  const Tennis_match = new TennisModel({
    TS_T_A,
    TS_T_B,
    TS_T_A_R_F,
    TS_T_B_R_F,
    TS_T_M_P_O,
    TS_T_M_P_E,
    TS_T_M_P_O_18,
    TS_T_M_P_U_18,
    matchTennisStop:false
  })
  Tennis_match.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
})
app.post("/api/footballMatchAdd", (req, res) => {
const {    FB_T_A,
  FB_T_B,
  FB_T_A_R,
  FB_T_B_R,
  FB_T_Half_D,
  FB_T_A_W,
  FB_T_B_W,
  FB_T_F_D,
  FB_T_G_E,
  FB_T_G_O,
  FB_T_P_Y,
  FB_T_P_N,
  FB_T_M_G_1,
  FB_T_M_G_2,
  FB_T_M_G_3,
  FB_T_M_G_4,
  FB_T_M_G_5,
  FB_T_M_G_5_M} = req.body;
const Football_Match = new FootballModel({
  FB_T_A,
  FB_T_B,
  FB_T_A_R,
  FB_T_B_R,
  FB_T_Half_D,
  FB_T_A_W,
  FB_T_B_W,
  FB_T_F_D,
  FB_T_G_E,
  FB_T_G_O,
  FB_T_P_Y,
  FB_T_P_N,
  FB_T_M_G_1,
  FB_T_M_G_2,
  FB_T_M_G_3,
  FB_T_M_G_4,
  FB_T_M_G_5,
  FB_T_M_G_5_M,
  fast_Half_res:false,
  full_res:false,
  total_goal_res:false,
  Penalty_res:false
})
Football_Match.save((err, noerr) => {
  if (err) {
    res.sendStatus(400);
  }
  if (noerr) {
    res.sendStatus(200);
  }
});
});
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, saltRounds).then(function (Passwordhash) {
    const Register = new RegisterUserModel({
      email: md5(email),
      password: Passwordhash,
      name,
    });
    Register.save((err, noerr) => {
      if (err) {
        res.sendStatus(400);
      }
      if (noerr) {
        res.sendStatus(200);
      }
    });
  });
});
//
app.listen(process.env.DB_PORT, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BoilerPlate_DB", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected & App is running`);
  } catch {
    console.log(`Database is't Connected & App is't running `);
  }
});
