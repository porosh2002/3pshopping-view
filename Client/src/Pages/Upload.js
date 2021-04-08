import React, { Component } from "react";
import Form from "../Components/Form/Form";
// import DropThumb from '../Components/Dropzone/Dropjone'
import moment from "moment";
// import { Button } from "../Styles/Styled";
import "../Styles/upload.css";
class Upload extends Component {
  state = {
    Movie_Name: null,
    Movie_Year: null,
    Uploader_Name: null,
    IMDB_Rating: null,
    Tomatos_Rating: null,
    Metacritic_Rating: null,
    Age_Requirement: null,
    Trailer_Link: null,
    Director_Link: null,
    Cast: null,
    Description: null,
    Download_Link: null,
    Subtitle_Link: null,
    Action: false,
    Adventure: false,
    Animation: false,
    Biography: false,
    Thriller: false,
    Comedy: false,
    Crime: false,
    Documentary: false,
    Drama: false,
    Family: false,
    Fantasy: false,
    Horror: false,
    Mystery: false,
    Romance: false,
    ScienceFiction: false,
    SuperHero: false,
  };
  CurrentTime = () => {
    return moment().format("MMMM Do YYYY, h:mm a");
  };
  render() {
    return (
      <div className="UploadDiv">
        <p className="MainTitleUp">Welcome to Admin Panel</p>
        <form>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Movie name : </p>
            <Form
              type="text"
              placeholder="movie name"
              name="name"
              minlen="2"
              maxlen="50"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Year : </p>
            <Form type="number" placeholder="movie relese year" name="year" />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Uploader Name : </p>
            <Form type="text" placeholder="uploader name" name="uploader" />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">IMDB Rating : </p>
            <Form type="number" placeholder="IMDB Rating" name="imdb" />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Rotten Tomatoes Rating : </p>
            <Form
              type="number"
              placeholder="Rotten Tomatoes Rating"
              name="rotten"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle"> Metacritic Rating : </p>
            <Form
              type="number"
              placeholder=" Metacritic Rating"
              name=" Metacritic"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Minimum Age Requirement : </p>
            <Form type="number" placeholder="12" name="Director" />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Trailer Link : </p>
            <Form type="text" placeholder="Trailer Link" name="trailer" />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Director : </p>
            <Form type="text" placeholder="Director name" name="Director" />
          </div>
          {/* Cetagories */}
          <div>
            <p className="uploadTitle">Categories</p>
            <p className="categories">Action</p>
            <p className="categories">Adventure</p>
            <p className="categories">Animation</p>
            <p className="categories">Family</p>
            <p className="categories">Biography</p>
            <p className="categories">Thriller</p>
            <p className="categories">Crime</p>
            <p className="categories">Superhero</p>
            <p className="categories">Comedy</p>
            <p className="categories">Documentary</p>
            <p className="categories">Drame</p>
            <p className="categories">Fantasy</p>
            <p className="categories">Romance</p>
            <p className="categories">Horror</p>
            <p className="categories">Mystery</p>
          </div>
          <br></br>
          {/* TextArea */}
          <div>
            <p className="uploadTitle">Casts : </p>
            <textarea
              spellCheck="false"
              className="UploadPageTextArea"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Description : </p>
            <textarea
              spellCheck="false"
              className="UploadPageTextArea"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Download Links : </p>
            <textarea
              spellCheck="false"
              className="UploadPageTextArea"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Subtitle Download Links : </p>
            <textarea
              spellCheck="false"
              className="UploadPageTextArea"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>

          <input className="UploadBTN" type="submit" />
        </form>
      </div>
    );
  }
}

export default Upload;
