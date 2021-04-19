import styled from "styled-components";
import ModalBG from '../Images/ModalBG.jpg'
import {Link} from 'react-router-dom'
// ** Loader
// Center
export const Center = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`
export const Loader = styled.div`
    height:100vh;
    width:100vw;
    background-color:#343a40;
    position:absolute;
    font-size:25px;
    color:#fff;
    text-align:center;
    `
export const LoaderImage = styled.img`
    height:90px;
    `
// ** Navigation
export const Navigation = styled.div`
    height:100px;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    padding:0px 30px;
    z-index:999999;
    background-color: #343a40;
`
// Mobile Menu
export const MobileMenu = styled.div`
height:450px;
width:100vw;
position:fixed;
top:90px;
left:0;
`
// error Image & Div
export const ErrorDiv = styled.div`
text-align:center;
background-color: #fff;
padding:100px 0px;
`
// Input
export const Input = styled.input`
margin-bottom:10px;
font-size:15px;
padding:10px;
border:none;
outline:none;
border:1.5px solid #aaa;
font-weight:600;
letter-spacing:0.5px;
border-radius:3px;
`
// Submit Button
export const Button = styled.input`
margin:20px 0px;
font-size:17px;
background-color:#343a40;
color:#fff;
width:100%;
padding:10px 0px;
outline:none;
border:none;
text-align:center;
cursor: pointer;
border-radius:2px;
&:hover{
    opacity:.9;
}
`
// Modal
export const Modal = styled.div`
height:100vh;
width:100vw;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999999;
background-color:#343a40c2;
`
// Modal Content Wraper
export const ModalChild = styled.div`
height:300px;
width:90%;
position:absolute;
background:url(${ModalBG});
top:50%;
left:50%;
transform:translate(-50%,-50%);
border-radius:5px;
background-position:center;
background-size:cover;
`
// Modal Content 
export const ModalContent = styled.p`
font-size:22px;
padding:0px 15px;
font-weight:500;
letter-spacing:.5px;
color:#343a40;
`
// Modal BTN
export const ModalBTN = styled.p`
font-size:17px;
padding:10px 0px;
background-color: #343a40;
color:#fff;
cursor: pointer;
width:300px;
border-radius:3px;
display:block;
margin:20px auto;
&:hover{
    opacity:.9;
}
`
export const MovieCard = styled(Link)`
background-color:#fff;
height:300px;
width:250px;
border-radius:3px;
display:inline-block;
margin:20px 10px;
background-size:cover !important;
background-position:center !important;
background-repeat:no-repeat !important;
`
export const MovieYear = styled.p`
    padding:5px 0px;
    background-color:#00fa9a;
    color:#343a40;
    font-size:15px;
    font-weight:600;
    max-width:50px;
    text-align:center;
    border-top-left-radius:3px;
`
export const Moviename = styled.p`
margin-top:105%;
text-align: center;
padding:5px;
background-color:#00fa9a;
color:#343a40;
font-weight:600;
border-bottom-left-radius:3px;
border-bottom-right-radius:3px;
`