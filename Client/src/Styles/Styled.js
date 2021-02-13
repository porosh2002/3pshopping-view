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
    `;
export const LoaderImage = styled.img`
    height:90px;
    `;
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
`;
// Mobile Menu
export const MobileMenu = styled.div`
height:300px;
width:100vw;
position:fixed;
top:90px;
left:0;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;
`;

