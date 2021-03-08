import React, { Component } from 'react'
import DropZone from '../Components/Dropzone/Dropjone'
import Form from '../Components/Form/Form';
import "../Styles/upload.css";
export default class ImageUpload extends Component {
    render() {
        return (
            <div className='ImageUploadDiv'>
            <Form placeholder='e.g. Jony Deep' type='text'/>
            <br></br>
            <DropZone />
            <input className='UploadBTN' type='submit' />
            </div>
        )
    }
}
 