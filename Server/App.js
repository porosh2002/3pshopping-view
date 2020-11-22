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
const FootballBetModel = require('./FootballBet');
const CricketBetModel = require('./CricketBet');
const clubModel = require('./Club')
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
app.post("/api/CricketBet", (req, res) => {
  const { betProject_id, betid, betprice, betamount, userid } = req.body;
  const Add_balance = new CricketBetModel({
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
app.post("/api/tennisResult", async(req, res) => {
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
                  if(docs){
                    console.log('ok');
                  }
                }
              );
            }
          });
        }
      })
    }
  });
});
app.post("/api/addmoney", (req, res) => {
  const { userID,addbkashid} = req.body;
  const Add_balance = new AddmoneyModel({
    userid:userID,
    tid:addbkashid,
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
app.post("/api/outmoney", (req, response) => {
  const { userID, tid, withamount } = req.body;
  const HashEmail= md5(userID)
  RegisterUserModel.findOne({email:HashEmail},(err,res)=>{
    if(res){
      const newBalance = res.balance - withamount
      RegisterUserModel.updateOne({email:HashEmail},{balance:newBalance},(err,res)=>{
        if(res){
      const out_balance = new outmoneyModel({
    userid:userID,
    tid,
    withamount,
    done: false,
  });
  out_balance.save((err, noerr) => {
    if (err) {
      response.sendStatus(400);
    }
    if (noerr) {
      response.sendStatus(200);
    }
  });
        }
      })
    }
  })
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
  TossCricket:false,
  firstballCricket:false,
  firstOverCricket:false,
  firstwicketandmethfull:false,
  powerplayCricket:false
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
    halfdone:false
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
  const { name, email, password,clubname } = req.body
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
    clubModel.findOne({name:clubname},(err,data)=>{
      if(data===null){
if(clubname !== ' '){
  const club = new clubModel({
    name:clubname,
    balance:0
  })
  club.save((err, noerr) => {
    if (err) {
      console.log(err);
    }
  });
}
      }
      if(err){
        console.log(err);
      }
    })
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
app.post('/api/footballfull',(req,res)=>{
  const {betid,fw,g_E_O,Penalty,GoalinNum} = req.body;
  FootballBetModel.find({betid:betid},(err,result)=>{
    if(result){
      result.map(data=>{
        // console.log(Number(data.betProject_id) === 5);
        if(Number(data.betProject_id)===fw || Number(data.betProject_id)===g_E_O || Number(data.betProject_id)===Penalty || Number(data.betProject_id)===GoalinNum){
          const BetPrice = data.betPrice;
          const Betamount = data.betamount;
          const HashedEmail = md5(data.userid)
          RegisterUserModel.find({email:HashedEmail},(err,result)=>{
            if(result){
              const newBalance = result[0].balance + (BetPrice*Betamount);
              RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                if(result){
                  console.log('ok');
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/firstwicketandmethfull',(req,res)=>{
  const {betid,firstWicket,firstWicketMethod} = req.body;
  CricketModel.updateOne({_id:betid},{firstwicketandmethfull:true},(err,doc)=>{
    if(err){
      console.log(err);
    }
    if(doc){
      CricketBetModel.find({betid:betid},(err,result)=>{
        if(result){
          result.map(data=>{
            if(Number(data.betProject_id)===firstWicket || Number(data.betProject_id)===firstWicketMethod){
              const BetPrice = data.betPrice;
              const Betamount = data.betamount;
              const HashedEmail = md5(data.userid)
              RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                if(result){
                  const newBalance = result[0].balance + (BetPrice*Betamount);
                  RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                    if(result){
                      console.log('ok');
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/finalcricket',(req,res)=>{
  const {
    betid,
      Heightrunin1stover,
      Hsix,
      Hpatner,
      TopBatsman,
      TopBowler,
      totalsix,
      totalfour,
      heightInvidualScore,
      fifty,
      FirstinningsScor,
      totalsixScore,
      totalsixfour,
  } = req.body;
  CricketBetModel.find({betid:betid},(err,result)=>{
    if(result){
      result.map(data=>{
        // console.log(Number(data.betProject_id) === 5);
        if(Number(data.betProject_id)===Heightrunin1stover || Number(data.betProject_id)===Hsix
        || Number(data.betProject_id)===Hpatner|| Number(data.betProject_id)===TopBatsman|| Number(data.betProject_id)===TopBowler
        || Number(data.betProject_id)===totalsix|| Number(data.betProject_id)===totalfour|| Number(data.betProject_id)===heightInvidualScore
        || Number(data.betProject_id)===fifty|| Number(data.betProject_id)===FirstinningsScor|| Number(data.betProject_id)===totalsixfour
        || Number(data.betProject_id)===totalsixScore
        ){
          const BetPrice = data.betPrice;
          const Betamount = data.betamount;
          const HashedEmail = md5(data.userid)
          RegisterUserModel.find({email:HashedEmail},(err,result)=>{
            if(result){
              const newBalance = result[0].balance + (BetPrice*Betamount);
              RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                if(result){
                  console.log('ok');
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/fthfRes',(req,res)=>{
  const {betid,halfValue} = req.body;
        FootballModel.updateOne({_id:betid},{halfdone:true},(err,doc)=>{
          if(err){
            console.log(err);
          }
          if(doc){
            FootballBetModel.find({betid:betid},(err,result)=>{
              if(result){
                result.map(data=>{
                  if(Number(data.betProject_id)===Number(halfValue)){
                    const BetPrice = data.betPrice;
                    const Betamount = data.betamount;
                    const HashedEmail = md5(data.userid)
                    RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                      if(result){
                        const newBalance = result[0].balance + (BetPrice*Betamount);
                    
                        RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                          if(result){
                            console.log('ok');
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        });
})
app.post('/api/tossCricket',(req,res)=>{
  const {betid,tossResult} = req.body;
  CricketModel.updateOne({_id:betid},{TossCricket:true},(err,doc)=>{
    if(err){
      console.log(err);
    }
    if(doc){
      CricketBetModel.find({betid:betid},(err,result)=>{
        if(result){
          result.map(data=>{
            if(Number(data.betProject_id)===Number(tossResult)){
              const BetPrice = data.betPrice;
              const Betamount = data.betamount;
              const HashedEmail = md5(data.userid)
              RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                if(result){
                  const newBalance = result[0].balance + (BetPrice*Betamount);
                  RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                    if(result){
                      console.log('ok');
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/firstballCricket',(req,res)=>{
  const {betid,firstballres} = req.body;
  CricketModel.updateOne({_id:betid},{firstballCricket:true},(err,doc)=>{
    if(err){
      console.log(err);
    }
    if(doc){
      CricketBetModel.find({betid:betid},(err,result)=>{
        if(result){
          result.map(data=>{
            if(Number(data.betProject_id)===Number(firstballres)){
              const BetPrice = data.betPrice;
              const Betamount = data.betamount;
              const HashedEmail = md5(data.userid)
              RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                if(result){
                  const newBalance = result[0].balance + (BetPrice*Betamount);
                  RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                    if(result){
                      console.log('ok');
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/firstOverCricket',(req,res)=>{
  const {betid,firstovrRun} = req.body;
  CricketModel.updateOne({_id:betid},{firstOverCricket:true},(err,doc)=>{
    if(err){
      console.log(err);
    }
    if(doc){
      CricketBetModel.find({betid:betid},(err,result)=>{
        if(result){
          result.map(data=>{
            if(Number(data.betProject_id)===Number(firstovrRun)){
              const BetPrice = data.betPrice;
              const Betamount = data.betamount;
              const HashedEmail = md5(data.userid)
              RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                if(result){
                  const newBalance = result[0].balance + (BetPrice*Betamount);
                  RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                    if(result){
                      console.log('ok');
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/powerplayCricket',(req,res)=>{
  const {betid,WicketInPowerolay} = req.body;
  CricketModel.updateOne({_id:betid},{powerplayCricket:true},(err,doc)=>{
    if(err){
      console.log(err);
    }
    if(doc){
      CricketBetModel.find({betid:betid},(err,result)=>{
        if(result){
          result.map(data=>{
            if(Number(data.betProject_id)===Number(WicketInPowerolay)){
              const BetPrice = data.betPrice;
              const Betamount = data.betamount;
              const HashedEmail = md5(data.userid)
              RegisterUserModel.find({email:HashedEmail},(err,result)=>{
                if(result){
                  const newBalance = result[0].balance + (BetPrice*Betamount);
                  RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,result)=>{
                    if(result){
                      console.log('ok');
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})
app.post('/api/deleteMoney',(req,res)=>{
  const {id} = req.body;
  console.log(id);
  AddmoneyModel.deleteOne({_id:id},(err,done)=>{
    if(err){
      console.log(err);
    }
  })
})
app.post('/api/deletePayment',(req,res)=>{
  const {id} = req.body;
  outmoneyModel.deleteOne({_id:id},(err,done)=>{
    if(err){
      console.log(err);
    }
  })
})
app.post('/api/addMoneyReq',(req,res)=>{
  const {id,value} = req.body;
  const HashedEmail = md5(id)
  RegisterUserModel.findOne({email:HashedEmail},(err,done)=>{
    if(err){
      console.log(err);
    }
    if(done){
      const newBalance = done.balance +Number(value);
      console.log(newBalance);
      RegisterUserModel.updateOne({email:HashedEmail},{balance:newBalance},(err,noerr)=>{
        if(err){
          console.log(err);
        }
        if(noerr){
          AddmoneyModel.deleteOne({_id:id},(err,done)=>{
            if(err){
              console.log(err);
            }
          })
        }
      })
    }
  })
})
//
app.post('/api/adminCheck',(req,res)=>{
  const {name,pass} = req.body;
  if(name===process.env.ADMIN_USERNAME && pass===process.env.ADMIN_PASS){
    res.sendStatus(200)
  }
  else{
    res.sendStatus(400)
  }
})
app.post('/api/tennisDelete',(req,res)=>{
  const{betid} = req.body;
  TennisModel.deleteOne({_id:betid},(err,result)=>{
    if(err){
      console.log(err);
    }
  })
})
app.post('/api/footballDelete',(req,res)=>{
  const{betid} = req.body;
  FootballModel.deleteOne({_id:betid},(err,result)=>{
    if(err){
      console.log(err);
    }
  })
})
app.post('/api/CricketDelete',(req,res)=>{
  const{betid} = req.body;
  CricketModel.deleteOne({_id:betid},(err,result)=>{
    if(err){
      console.log(err);
    }
  })
})
app.get('/api/deposite',(req,res)=>{
  AddmoneyModel.find({done:false},(err,data)=>{
    if(data){
      res.json(data)
    }
  })
})
app.get('/api/outmoney',(req,res)=>{
  outmoneyModel.find({},(err,data)=>{
    if(data){
      res.json(data)
    }
  })
})
app.get('/api/cricket',(req,res)=>{
  CricketModel.find({},(err,result)=>{
    if(result){
      res.json(result)
    }
  })
})
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
