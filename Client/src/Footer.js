import React from "react";
import {
  Footer,
  FooterLink,
  FooterLinkStyle
} from "./Styled";
import { FaFacebook, FaYoutube } from "react-icons/fa";
export default function footer() {
  return (
    <Footer>
    <p style={{fontSize:"1rem",color:"#d2d2d2",margin:"10px"}}>Follow us on</p>
          <FooterLink>
        <a style={{fontSize:"30px",color:"#d2d2d2"}} target='self' href="https://www.facebook.com/hd.bet">
          <FaFacebook />
        </a>
      </FooterLink>
      <FooterLink>
        <a style={{fontSize:"30px",color:"#d2d2d2"}} target='self' href="https://www.youtube.com/channel/UCOAnzv7nBH8PikQGQZUfONQ">
          <FaYoutube />
        </a>
      </FooterLink>
      <br/>
      <br/>
      <FooterLink>
        <FooterLinkStyle to="">Terms and Condition</FooterLinkStyle>
      </FooterLink>
      <FooterLink>
        <FooterLinkStyle to="">Privacy Policy</FooterLinkStyle>
      </FooterLink>
      <FooterLink>
        <FooterLinkStyle to="">(18+) Please Gamble Responsibly</FooterLinkStyle>
      </FooterLink>
      <FooterLink>
        <a target='self' href="https://www.facebook.com/wecubs"><span style={{color:"#a7e9af"}}>Make any Website with wecubs</span></a>
      </FooterLink>
    </Footer>
  );
}
