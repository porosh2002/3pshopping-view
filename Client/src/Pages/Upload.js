import React, { Component } from "react";
import Form from "../Components/Form/Form";
import moment from "moment";
import axios from "axios";
import { URL } from "../serverUrl";
import "../Styles/upload.css";
import Modal from "../Components/Modal/Modal";
import Subtitle from "../Components/Download_Links/Subtitle";
class Upload extends Component {
  state = {
    SubNumber:1,
    MovieUploadDone: false,
    ErrorHappend:false,
    Movie_Name: null,
    Movie_Year: null,
    Uploader_Name:'Porosh',
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
  IncreaseSub=()=>{
    this.setState({SubNumber:this.state.SubNumber + 1})
  }
  decreaseSub=()=>{
    this.setState({SubNumber:this.state.SubNumber - 1})
  }
  HandleClick = () => {
    this.setState({
      ImageUploadDone: false,
      ErrorHappend: false,
    });
    window.location.reload();
  };
  FormValueChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  CategoriesSelect = (e) => {
    const name = e.target.attributes.name.value;
    if (name === "Action") {
      this.setState({ [name]: !this.state.Action });
    } else if (name === "Adventure") {
      this.setState({ [name]: !this.state.Adventure });
    } else if (name === "Animation") {
      this.setState({ [name]: !this.state.Animation });
    } else if (name === "Biography") {
      this.setState({ [name]: !this.state.Biography });
    } else if (name === "Thriller") {
      this.setState({ [name]: !this.state.Thriller });
    } else if (name === "Comedy") {
      this.setState({ [name]: !this.state.Comedy });
    } else if (name === "Crime") {
      this.setState({ [name]: !this.state.Crime });
    } else if (name === "Documentary") {
      this.setState({ [name]: !this.state.Documentary });
    } else if (name === "Drama") {
      this.setState({ [name]: !this.state.Drama });
    } else if (name === "Family") {
      this.setState({ [name]: !this.state.Family });
    } else if (name === "Fantasy") {
      this.setState({ [name]: !this.state.Fantasy });
    } else if (name === "Horror") {
      this.setState({ [name]: !this.state.Horror });
    } else if (name === "Mystery") {
      this.setState({ [name]: !this.state.Mystery });
    } else if (name === "Romance") {
      this.setState({ [name]: !this.state.Romance });
    } else if (name === "ScienceFiction") {
      this.setState({ [name]: !this.state.ScienceFiction });
    } else if (name === "SuperHero") {
      this.setState({ [name]: !this.state.SuperHero });
    }
  };
  CurrentTime = () => {
    return moment().format("MMMM Do YYYY, h:mm a");
  };
  FormSubmit = (e) => {
    e.preventDefault();
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
    } = this.state;
    const UploadDate = moment().format('MMMM Do YYYY')
    if (
      Action === false &&
      Adventure === false &&
      Animation === false &&
      Biography === false &&
      Thriller === false &&
      Comedy === false &&
      Crime === false &&
      Documentary === false &&
      Drama === false &&
      Family === false &&
      Fantasy === false &&
      Horror === false &&
      Mystery === false &&
      Romance === false &&
      SuperHero === false &&
      ScienceFiction === false
    ) {
      alert("Categories is not selected");
    } else {
      axios.post(`${URL}api/upload/movie`, {
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
        UploadDate
      }).then((res) => {
        if (res.data === "noerror") {
          this.setState({ MovieUploadDone: true });
        } else if (res.data === "error") {
          this.setState({ ErrorHappend: true });
        }
      });
    }
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
      SuperHero,
      ScienceFiction,
      MovieUploadDone, ErrorHappend
    } = this.state;
    const SuccessStyle = MovieUploadDone ? null : { display: "none" };
    const ErrorStyle = ErrorHappend ? null : { display: "none" }
    const ActionStyle = Action
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const AdventureStyle = Adventure
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const AnimationStyle = Animation
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const BiographyStyle = Biography
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const ThrillerStyle = Thriller
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const ComedyStyle = Comedy
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const CrimeStyle = Crime
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const DocumentaryStyle = Documentary
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const DramaStyle = Drama
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const FamilyStyle = Family
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const FantasyStyle = Fantasy
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const HorrorStyle = Horror
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const MysteryStyle = Mystery
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const RomanceStyle = Romance
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const SuperHeroStyle = SuperHero
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    const ScienceFictionStyle = ScienceFiction
      ? { backgroundColor: "#00fa9a" }
      : { backgroundColor: "#aaa" };
    return (
      <div className="UploadDiv">
        <p className="MainTitleUp">Welcome to Admin Panel</p>
        <form onSubmit={this.FormSubmit}>
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
              step="0.01"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Rotten Tomatoes Rating : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder="Rotten Tomatoes Rating"
              name="Tomatos_Rating"
              step="0.01"
            />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle"> Metacritic Rating : </p>
            <Form
              onChange={this.FormValueChange}
              type="number"
              placeholder=" Metacritic Rating"
              name="Metacritic_Rating"
              step="0.01"
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
              style={ActionStyle}
            >
              Action
            </p>
            <p
              className="categories"
              name="ScienceFiction"
              onClick={this.CategoriesSelect}
              style={ScienceFictionStyle}
            >
              Science Fiction
            </p>
            <p
              className="categories"
              name="Adventure"
              onClick={this.CategoriesSelect}
              style={AdventureStyle}
            >
              Adventure
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Animation"
              style={AnimationStyle}
            >
              Animation
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Family"
              style={FamilyStyle}
            >
              Family
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Biography"
              style={BiographyStyle}
            >
              Biography
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Thriller"
              style={ThrillerStyle}
            >
              Thriller
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Crime"
              style={CrimeStyle}
            >
              Crime
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="SuperHero"
              style={SuperHeroStyle}
            >
              Superhero
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Comedy"
              style={ComedyStyle}
            >
              Comedy
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Documentary"
              style={DocumentaryStyle}
            >
              Documentary
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Drama"
              style={DramaStyle}
            >
              Drame
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Fantasy"
              style={FantasyStyle}
            >
              Fantasy
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Romance"
              style={RomanceStyle}
            >
              Romance
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Horror"
              style={HorrorStyle}
            >
              Horror
            </p>
            <p
              className="categories"
              onClick={this.CategoriesSelect}
              name="Mystery"
              style={MysteryStyle}
            >
              Mystery
            </p>
          </div>
          <br></br>
          {/* TextArea */}
          <div>
            <p className="uploadTitle">Casts : </p>
            <textarea
              required
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Casts"
            ></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>

          {/* <div className="UploadContentWraper">
            <p className="uploadTitle">Trailer Link : </p>
            <Form
              onChange={this.FormValueChange}
              type="text"
              placeholder="Trailer Link"
              name="Trailer_Link"
            />
          </div> */}

          <br></br>
          <div>
            <p className="uploadTitle">Trailer: </p>
            <textarea
              required
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Trailer_Link"
            ></textarea>
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Description : </p>
            <textarea
              required
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Description"
            ></textarea>
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Download Links : </p>
            <textarea
              required
              onChange={this.FormValueChange}
              spellCheck="false"
              className="UploadPageTextArea"
              name="Download_Link"
            ></textarea>
          </div>
          <br></br>











          <div>
            <p className='SubLinkAdd' onClick={this.IncreaseSub}>Add one</p>
            <p className='SubLinkAdd' onClick={this.decreaseSub}>Delete one </p>
            <br />
          <Subtitle Loop={this.state.SubNumber} Change={this.FormValueChange} />
          </div>


















          <input className="UploadBTN" type="submit" />
        </form>
        <div style={SuccessStyle}>
            <Modal
              ModalClick={this.HandleClick}
              Text={"Movie Uploaded Successfully"}
            />
          </div>
          <div style={ErrorStyle}>
            <Modal
              ModalClick={this.HandleClick}
              Text={" Something went wrong "}
            />
          </div>
      </div>
    );
  }
}

export default Upload;
