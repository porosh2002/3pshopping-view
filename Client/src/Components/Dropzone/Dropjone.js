import React,{useState} from 'react'
import { AiOutlineCloudUpload,AiOutlineUpload} from "react-icons/ai";
// import poster from '../../Images/poster.jpg'
import {useDropzone} from 'react-dropzone';
export default function Dropjone({onChange}) {
    const [yourImage,setImage]=useState([]);
    const{getRootProps,getInputProps,isDragActive} = useDropzone({
        accept:"image/*",
        onDrop:(acceptedFiles)=>{
            // onChange(acceptedFiles);
            setImage(
                acceptedFiles.map((upFile)=>Object.assign(upFile,{
                    preview:URL.createObjectURL(upFile)
                }))
            )
        }
    })
    return (
<div>
<div className='DropDiv' {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive ? <div className='dropsign'><AiOutlineUpload /></div> :<div className='dropsign'><AiOutlineCloudUpload /></div>}
        </div>
        {
            yourImage.map((upFile,i)=>{
                return(
                    <div className='ImgPreDiv' key={i}>
                    <img src={upFile.preview} alt='Thumbnail' width='300' />
                    </div>
                )
            })
        }
</div>
    )
}
