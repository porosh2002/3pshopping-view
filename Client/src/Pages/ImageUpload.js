import React, { Component } from 'react'
import DropZone from '../Components/Dropzone/Dropjone'
import Form from '../Components/Form/Form';
import Title from '../Components/Title/Title';
import "../Styles/upload.css";
import axios from 'axios';
import {URL} from '../serverUrl'
export default class ImageUpload extends Component {
    state={
        Image:null,
        Name:null,
        ImagesArray:[],
        SearchField:''
    }
    ImageContent=(e)=>{
       this.setState({Image:e[0]})
    }
    OnTextFieldChange=e=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    ImageUpload=e=>{
        e.preventDefault();
        const {Image,Name} = this.state;
        if(Image !== null && Name !== null){
            const formData = new FormData();
            formData.append("image",Image);
            const config = {
                header: { "content-type": "multipart/form-data" },
              };
              axios.post(`${URL}api/image/${Name}`,formData,config).then(res=>{
                  console.log(res);
              })
        }
    }
    render() {
        return (
            <div className='ImageUploadDiv'>
                <Title Text='Upload Images' />
                <br></br>
                <br></br>
                <br></br>
<form onSubmit={this.ImageUpload}>
<Form minlen='2' maxlen='50' onChange={this.OnTextFieldChange} placeholder='e.g. Jony Deep' type='text' name='Name'/>
            <br></br>
            <br></br>
            <DropZone onChange={this.ImageContent}/>
            <input className='UploadBTN' type='submit' />
</form>
            <br></br>
            <br></br>
            <Title Text='Images' />
            </div>
        )
    }
}
 