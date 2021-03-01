import React, { Component } from "react";
import Form from "../Components/Form/Form";
import { Button } from "../Styles/Styled";
import "../Styles/upload.css";
class Upload extends Component {
  render() {
    return (
      <div className="UploadDiv">
        <p className="MainTitleUp">Welcome to Admin Panel</p>
        <form>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Movie name : </p>
            <Form />
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Year : </p>
            <Form type='number'/>
          </div>
          <div className="UploadContentWraper">
            <p className="uploadTitle">Image : </p>
            <input type='file' className='ImageInput' />
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
