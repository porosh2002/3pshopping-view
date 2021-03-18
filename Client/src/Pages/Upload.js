import React, { Component } from "react";
import Form from "../Components/Form/Form";
// import DropThumb from '../Components/Dropzone/Dropjone'
import moment from 'moment'
// import { Button } from "../Styles/Styled";
import "../Styles/upload.css";
class Upload extends Component {
  CurrentTime=()=>{
    return moment().format('MMMM Do YYYY, h:mm a')
  }
  render() {
    return (
      <div className="UploadDiv">
        <p className="MainTitleUp">Welcome to Admin Panel</p>
        <form>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Movie name : </p>
            <Form type='text' placeholder='movie name' name='name' minlen='2' maxlen='50'/>
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Year : </p>
            <Form type='number' placeholder='movie relese year' name='year' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Uploader Name : </p>
            <Form type='text' placeholder='uploader name' name='uploader' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">IMDB Rating : </p>
            <Form type='number' placeholder='IMDB Rating' name='imdb' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Rotten Tomatoes Rating : </p>
            <Form type='number' placeholder='Rotten Tomatoes Rating' name='rotten' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle"> Metacritic Rating : </p>
            <Form type='number' placeholder=' Metacritic Rating' name=' Metacritic' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Trailer Link : </p>
            <Form type='text' placeholder='Trailer Link' name='trailer' />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Director : </p>
            <Form type='text' placeholder='Director name' name='Director' />
          </div>
          <div>
            <p className="uploadTitle">Casts : </p>
            <textarea  spellCheck='false' className='UploadPageTextArea'></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Description : </p>
            <textarea spellCheck='false' className='UploadPageTextArea'></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Download Links : </p>
            <textarea spellCheck='false' className='UploadPageTextArea'></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          <br></br>
          <div>
            <p className="uploadTitle">Subtitle Download Links : </p>
            <textarea spellCheck='false' className='UploadPageTextArea'></textarea>
            {/* <Form type='text' placeholder='casts' name='Director' /> */}
          </div>
          
          <input className='UploadBTN' type='submit' />
        </form>
      </div>
    );
  }
}

export default Upload;
