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
    Casts: null,
    Description: null,
    Download_Link: null,
    Subtitle_Link: null,
    Action:false,
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
  FormValueChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  CategoriesSelect = (e) => {
const name = e.target.attributes.name.value
    this.setState({ [name]: !this.state.name });
  };
  CurrentTime = () => {
    return moment().format("MMMM Do YYYY, h:mm a");
  };
  render() {
    const {
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
    } = this.state; 
    return (
      <div className="UploadDiv">
        <p className="MainTitleUp">Welcome to Admin Panel</p>
        <form>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Movie name : </p>
            <Form
              onChange={this.FormValueChange}
              type="text"
              placeholder="movie name"
              name="Movie_Name"
              minlen="2"
              maxlen="50"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Year : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder="movie relese year"
              name="Movie_Year"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Uploader Name : </p>
            <Form
              type="text"
              placeholder="uploader name"
              name="Uploader_Name"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">IMDB Rating : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder="IMDB Rating"
              name="IMDB_Rating"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Rotten Tomatoes Rating : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder="Rotten Tomatoes Rating"
              name="Tomatos_Rating"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle"> Metacritic Rating : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder=" Metacritic Rating"
              name="Metacritic_Rating"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Minimum Age Requirement : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder="12"
              name="Age_Requirement"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Trailer Link : </p>
            <Form
              onChange={this.FormValueChange}
              type="text"
              placeholder="Trailer Link"
              name="Trailer_Link"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Director : </p>
            <Form
              onChange={this.FormValueChange}
              type="text"
              placeholder="Director name"
              name="Director_Link"
            />
          </div>
          {/* Cetagories */}
          <div>
            <p className="uploadTitle">Categories</p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Action"
              style={Action ? {backgroundColor:"#00fa9a"} :null}
            >
              Action
            </p>
            <p
              className="categories"
              name="Adventure"
              onClick={this.CategoriesSelect}
            >
              Adventure
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Animation"
            >
              Animation
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Family"
            >
              Family
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Biography"
            >
              Biography
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Thriller"
            >
              Thriller
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Crime"
            >
              Crime
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Superhero"
            >
              Superhero
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Comedy"
            >
              Comedy
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Documentary"
            >
              Documentary
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Drame"
            >
              Drame
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Fantasy"
            >
              Fantasy
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Romance"
            >
              Romance
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Horror"
            >
              Horror
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Mystery"
            >
              Mystery
            </p>
          </div>
          <br></br>
          {/* TextArea */}
          <div>
            <p className="uploadTitle">Casts : </p>
            <textarea
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Casts"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Description : </p>
            <textarea
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Description"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Download Links : </p>
            <textarea
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Download_Link"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Subtitle Download Links : </p>
            <textarea
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Subtitle_Link"
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
