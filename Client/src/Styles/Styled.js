import styled from "styled-components";
// ** Loader
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
cursor: pointer;
border-radius:2px;
&:hover{
    opacity:.9;
}
`