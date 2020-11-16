import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Div = styled.div`
  text-align: center;
  margin:70px 0px;
`;
export const Input = styled.input`
  font-size: 16px;
  display:block;
margin:10px auto;
  width: 310px;
  text-align:center;
  padding: 0.5rem 5px;
  border: 1px solid grey;
  outline: none;
  border-radius: 3px;
  &:hover {
    border: 1px solid darkgrey;
  }
  &:focus {
    border: 1px solid royalblue;
  }
`;
export const Button = styled.input`
border:none;
display:block;
margin:30px auto;
font-size:18px;
width:150px;
color:#f7f7f7;
background-color:#7344f5;
cursor:pointer;
padding:7px 0px;
border-radius:3px;
transition:.3s;
&:hover {
    background-color:#343a40;
  transition:.3s;
  }
`
export const EImage = styled.img`
  height: 300px;
`;
export const EDIV = styled.div`
position:absolute;
top:0;
  height:100vh;
  width:100vw;
  background-color: #29303b46;
`;
export const Modal = styled.div`
background-color: #29303b;
border-radius:5px;
`;

export const Cross = styled.div`
font-size:18px;
color:#f7f7f7;
position:absolute;
top:20px;
right:30px;
cursor:pointer;
`;
export const Footer = styled.div`
padding:30px 0px;
background-color:#29303b;
text-align:center;
`;
export const FooterLink = styled.div`
display:inline-block;
margin:20px;
`;
export const FooterLinkStyle = styled(Link)`
text-decoration:none;
font-size:1rem;
color:#d2d2d2;
`;
export const FooterLinkStyleSocial = styled(Link)`
color:#d2d2d2;
font-size:2rem;
`;
export const AdminMenu = styled.div`
background-color:#444;
text-align:center;
padding-top:20px;
`;
export const AdminContent = styled.div`
padding:50px 0px;
text-align:center;
`;
export const AdminCTitle = styled.div`
font-size:25px;
color:#444;
`;
export const Select = styled.select`
font-size:15px;
padding:5px 10px;
color:#444;
margin:30px 0px;
border:1px solid #444;
border-radius:3px;
`;