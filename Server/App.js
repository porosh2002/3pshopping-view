const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const chalk = require('chalk');
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const saltRounds = 10;
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const { v4: uuidv4 } = require('uuid');
const multer = require("multer");
const cors = require("cors");
const RegisterUserModel = require("./Register");
const ImageInfoModel = require("./ImageInfo");
const ImageModel = require("./Images");
const MovieModel = require("./MovieInfo");
const { json } = require("body-parser");
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
const ImageUpload = multer({
  limits: {
    fileSize:1000000,
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

//Login
app.post("/api/login", (req, res) => {
  const { Email, Password } = req.body;
  RegisterUserModel.findOne({ email: md5(Email) }, (error, result) => {
    if (result) {
      bcrypt.compare(Password, result.password, function (err, Passok) {
        if (Passok) {
          res.json(Email);
        } else {
          res.json('error');
        }
      });
    } else {
      res.json('error');
    }
  });
});
// Register
app.post("/api/register", (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, saltRounds).then(function (Passwordhash) {
    const Register = new RegisterUserModel({
      email: md5(email),
      password: Passwordhash,
      name,
      active:false
    });
    Register.save((err,noerr)=>{
      if(err){
        res.send('error')
      }
      else{
        res.send('noerror')
      }
    });
  });
});
// Image Upload
app.post('/api/image/:name',ImageUpload.single("image"),(req,res)=>{
  const Image = req.file.buffer;
  const ImageName = req.params.name;
  const ID = uuidv4()
  const File = new ImageInfoModel({
    ID,
    ImageName,
  });
  File.save((err, noerr) => {
    if (err) {
      res.json('error');
    }
    if (noerr) {
      const ImageData = new ImageModel({
        ID,
        Image
      })
      ImageData.save((err2,noerr2)=>{
        if(noerr2){
          res.json('noerror');
        }
      })
    }
  });
})
// Get Images Info
app.get('/api/image/info',(req,res)=>{
  ImageInfoModel.find({},function(err,result){
    if(result){
        res.json(result)
    }
  })
})
// Get Image 
app.get('/api/image/info/image/:id',(req,res)=>{
  const ID = req.params.id;
  ImageModel.find({ID:ID},function(err,result){
    if(result){
    res.set("Content-Type", "image/jpeg");
    res.send(result[0].Image)
    }
    if(err){
      console.log(err);
    }
  })
})
//
// Movie Details
app.post('/api/upload/movie',(req,res)=>{
  const {        Action,
    Adventure,
    Animation,
    Biography,
    Thriller,
    Comedy,
    Crime,
    Documentary,
    Drama,
    Family,
    Fantasy,
    Horror,
    Mystery,
    Romance,
    SuperHero,
    ScienceFiction,
    Movie_Name,
    Movie_Year,
    Uploader_Name,
    IMDB_Rating,
    Tomatos_Rating,
    Metacritic_Rating,
    Age_Requirement,
    Trailer_Link,
    Director_Link,
    Casts,
    Description,
    Download_Link,
    Subtitle_Link} = req.body
  const File = new MovieModel({
    Action,
    Adventure,
    Animation,
    Biography,
    Thriller,
    Comedy,
    Crime,
    Documentary,
    Drama,
    Family,
    Fantasy,
    Horror,
    Mystery,
    Romance,
    SuperHero,
    ScienceFiction,
    Movie_Name,
    Movie_Year,
    Uploader_Name,
    IMDB_Rating,
    Tomatos_Rating,
    Metacritic_Rating,
    Age_Requirement,
    Trailer_Link,
    Director_Link,
    Casts,
    Description,
    Download_Link,
    Subtitle_Link,
  });
  File.save((err, noerr) => {
    if (err) {
      res.json('error');
    }
if(noerr){
  res.json('noerror')
}
  });
})


app.listen(process.env.DB_PORT, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Test", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected & App is running`);
  } catch {
    console.log(`Database is't Connected & App is't running `);
  }
});
