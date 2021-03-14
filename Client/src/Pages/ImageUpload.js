import React, { Component } from "react";
import DropZone from "../Components/Dropzone/Dropjone";
import Form from "../Components/Form/Form";
import Title from "../Components/Title/Title";
import "../Styles/upload.css";
import Modal from "../Components/Modal/Modal";
import axios from "axios";
import { URL } from "../serverUrl";
import ImageCard from "../Components/Card/ImageCardList";
export default class ImageUpload extends Component {
  state = {
    Image: null,
    Name: null,
    SearchField:null,
    ImageUploadDone: false,
    ErrorHappend: false,
  };
  ImageContent = (e) => {
    this.setState({ Image: e[0] });
  };
  OnTextFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  HandleClick = () => {
    this.setState({
      ImageUploadDone: false,
      ErrorHappend: false,
    });
    window.location.reload();
  };
  ImageUpload = (e) => {
    e.preventDefault();
    const { Image, Name } = this.state;
    if (Image !== null && Name !== null) {
      const formData = new FormData();
      formData.append("image", Image);
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      axios.post(`${URL}api/image/${Name}`, formData, config).then((res) => {
        if (res.data === "noerror") {
          this.setState({ ImageUploadDone: true });
        } else if (res.data === "error") {
          this.setState({ ErrorHappend: true });
        }
      });
    }
  };
  render() {
    const { ImageUploadDone, ErrorHappend,SearchField } = this.state;
    const SuccessStyle = ImageUploadDone ? null : { display: "none" };
    const ErrorStyle = ErrorHappend ? null : { display: "none" }
    return (
      <div className="ImageUploadDiv">
        <Title Text="Upload Images" />
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={this.ImageUpload}>
          <Form
            minlen="2"
            maxlen="50"
            onChange={this.OnTextFieldChange}
            placeholder="e.g. Jony Deep"
            type="text"
            name="Name"
          />
          <br></br>
          <DropZone onChange={this.ImageContent} />
          <input className="UploadBTN" type="submit" />
        </form>
        <br></br>
        <br></br>
        <Title Text="Images" />
        <br></br>
        <Form
          minlen="2"
          maxlen="50"
          onChange={this.OnTextFieldChange}
          placeholder="e.g. Jony Deep"
          type="text"
          name="SearchField"
        />
        <br></br>
         <ImageCard SearchField={SearchField} /> 
        <div style={{ color: "#343a40" }}>
          <div style={SuccessStyle}>
            <Modal
              ModalClick={this.HandleClick}
              Text={"Image Uploaded Successfully"}
            />
          </div>
          <div style={ErrorStyle}>
            <Modal
              ModalClick={this.HandleClick}
              Text={" Something went wrong "}
            />
          </div>
        </div>
      </div>
    );
  }
}
