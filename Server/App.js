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
const FootballModel = require("./Football");
const multer = require("multer");
const cors = require("cors");
const RegisterUserModel = require("./Register");
const TennisModel = require("./Tennis");
const CricketModel = require("./Cricket");
const AddmoneyModel = require("./addmoney");
const outmoneyModel = require("./withmoney");
const TennisBetModel = require("./Tennisbet");
const FootballBetModel = require('./FootballBet')
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
app.post("/api/tenisBet", (req, res) => {
  const { betProject_id, betid, betprice, betamount, userid } = req.body;
  const Add_balance = new TennisBetModel({
    betProject_id,
    betid,
    betPrice: betprice,
    betamount,
    userid,
    done: false,
  });
  Add_balance.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
      console.log(err);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
app.post("/api/FootballBet", (req, res) => {
  const { betProject_id, betid, betprice, betamount, userid } = req.body;
  const Add_balance = new FootballBetModel({
    betProject_id,
    betid,
    betPrice: betprice,
    betamount,
    userid,
    done: false,
  });
  Add_balance.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
      console.log(err);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
// Need to Delete Tennis Data Here After Proccessing
app.post("/api/balanceEdit", (req, res) => {
  console.log(req.body);
  const { userid, newBalance } = req.body;
  RegisterUserModel.updateOne(
    { email: md5(userid) },
    { balance: newBalance },
    (err, noerr) => {
      if (noerr) {
        console.log("Done");
      }
    }
  );
});
app.post("/api/tennisResult", (req, res) => {
  const { betid, matchwin, pointE_O, matchPointO_U } = req.body;
  TennisBetModel.find({ betid: betid }, (err, result) => {
    if (result) {
      result.map((data) => {
        if (
          Number(data.betProject_id) === matchwin ||
          Number(data.betProject_id) === pointE_O ||
          Number(data.betProject_id) === matchPointO_U
        ) {
          const emailHashed = md5(data.userid);
          RegisterUserModel.findOne({ email: emailHashed }, (err, res) => {
            if (res) {
              const newBalance = res.balance + data.betPrice * data.betamount;
              RegisterUserModel.updateOne(
                { email: emailHashed },
                { balance: newBalance },
                function (err, docs) {
                  if (err) {
                    console.log(err);
                  }
                }
              );
            }
          });
        }
      });
    }
  });
});
app.post("/api/addmoney", (req, res) => {
  const { userid, tid } = req.body;
  const Add_balance = new AddmoneyModel({
    userid,
    tid,
    done: false,
  });
  Add_balance.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
app.post("/api/outmoney", (req, res) => {
  const { userid, tid, withamount } = req.body;
  const out_balance = new AddmoneyModel({
    userid,
    tid,
    withamount,
    done: false,
  });
  out_balance.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
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
app.post("/api/cricketMatchAdd", (req, res) => {
  const {
    C_T_A,
    C_T_B,
    C_T_A_T,
    C_T_B_T,
    F_M_R_A,
    F_M_R_B,
    F_B_F_I_0,
    F_B_F_I_1,
    F_B_F_I_2,
    F_B_F_I_3,
    F_B_F_I_4,
    F_B_F_I_6,
    TS_T_A_R_more,
    F_O_F_I_3,
    TS_T_A_R_F_6,
    F_O_F_I_9,
    F_O_F_I_10,
    F_W_F_I_O,
    F_W_F_I_U,
    F_W_M_F_I_C,
    F_W_M_F_I_R,
    F_W_M_F_I_S,
    F_W_M_F_I_B,
    F_W_M_F_I_LBW,
    F_W_M_F_I_OTHR,
    W_P_P_N,
    W_P_P_1,
    W_P_P_N_2,
    H_R_F_O_A,
    H_R_F_O_B,
    H_R_F_O_D,
    H_S_A,
    H_S_B,
    H_S_T,
    H_P_A,
    H_P_B,
    H_P_T,
    T_B_T_A,
    T_B_T_B,
    T_BO_T_A,
    T_BO_T_B,
    H_T_T_S_A,
    H_T_T_S_B,
    H_T_T_F_A,
    H_T_T_F_B,
    H_I_S_OV,
    H_I_S_UN,
    S_FY,
    S_FN,
    F_I_S_O,
    F_I_S_U,
    T_M_S_OV,
    T_M_S_UN,
    T_M_F_OV,
    T_M_F_UN,
  } = req.body;
  const cricket_match = new CricketModel({
    C_T_A,
    C_T_B,
    C_T_A_T,
    C_T_B_T,
    F_M_R_A,
    F_M_R_B,
    F_B_F_I_0,
    F_B_F_I_1,
    F_B_F_I_2,
    F_B_F_I_3,
    F_B_F_I_4,
    F_B_F_I_6,
    TS_T_A_R_more,
    F_O_F_I_3,
    TS_T_A_R_F_6,
    F_O_F_I_9,
    F_O_F_I_10,
    F_W_F_I_O,
    F_W_F_I_U,
    F_W_M_F_I_C,
    F_W_M_F_I_R,
    F_W_M_F_I_S,
    F_W_M_F_I_B,
    F_W_M_F_I_LBW,
    F_W_M_F_I_OTHR,
    W_P_P_N,
    W_P_P_1,
    W_P_P_N_2,
    H_R_F_O_A,
    H_R_F_O_B,
    H_R_F_O_D,
    H_S_A,
    H_S_B,
    H_S_T,
    H_P_A,
    H_P_B,
    H_P_T,
    T_B_T_A,
    T_B_T_B,
    T_BO_T_A,
    T_BO_T_B,
    H_T_T_S_A,
    H_T_T_S_B,
    H_T_T_F_A,
    H_T_T_F_B,
    H_I_S_OV,
    H_I_S_UN,
    S_FY,
    S_FN,
    F_I_S_O,
    F_I_S_U,
    T_M_S_OV,
    T_M_S_UN,
    T_M_F_OV,
    T_M_F_UN,
    tossdone: false,
    finalmatch: false,
    firstball: false,
    firststover: false,
    firstwicket: false,
    firstwicketmethod: false,
    poerplaywicket: false,
    heightrunfirststover: false,
    heightsix: false,
    heightpatnership: false,
    teamtopbats: false,
    teamtopbowl: false,
    totalheightsix: false,
    totalheightfour: false,
    individualscore: false,
    firstinningsrun: false,
    fiftymade: false,
    totalsix: false,
    totalfour: false,
  });
  cricket_match.save((err, noerr) => {
    if (err) {
      // res.sendStatus(400);
      console.log(err);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
app.post("/api/tenisMatchAdd", (req, res) => {
  const {
    TS_T_A,
    TS_T_B,
    TS_T_A_R_F,
    TS_T_B_R_F,
    TS_T_M_P_O,
    TS_T_M_P_E,
    TS_T_M_P_O_18,
    TS_T_M_P_U_18,
  } = req.body;
  const Tennis_match = new TennisModel({
    TS_T_A,
    TS_T_B,
    TS_T_A_R_F,
    TS_T_B_R_F,
    TS_T_M_P_O,
    TS_T_M_P_E,
    TS_T_M_P_O_18,
    TS_T_M_P_U_18,
    matchTennisStop: false,
  });
  Tennis_match.save((err, noerr) => {
    if (err) {
      res.sendStatus(400);
    }
    if (noerr) {
      res.sendStatus(200);
    }
  });
});
app.post("/api/footballMatchAdd", (req, res) => {
  const {
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
  } = req.body;
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
  });
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
      balance: 0,
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
app.post("/api/getuserdata", (req, res) => {
  const hashedEmail = md5(req.body.userID);
  RegisterUserModel.find({email:hashedEmail}, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});
// Football
//
app.get('/api/football',(req,res)=>{
  FootballModel.find({},(err,result)=>{
    if(result){
      res.json(result)
    }
  })
})
app.get("/api/tennis", (req, res) => {
  TennisModel.find({}, (err, result) => {
    if (result) {
      res.json(result);
    }
  });
});
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
