import React from "react";
import {
  Footer,
  FooterLink,
  FooterLinkStyle,
  FooterLinkStyleSocial,
} from "./Styled";
import { FaFacebook, FaYoutube } from "react-icons/fa";
export default function footer() {
  return (
    <Footer>
    <p style={{fontSize:"1rem",color:"#d2d2d2",margin:"10px"}}>Follow us on</p>
          <FooterLink>
        <FooterLinkStyleSocial to="/">
          <FaFacebook />
        </FooterLinkStyleSocial>
      </FooterLink>
      <FooterLink>
        <FooterLinkStyleSocial to="/">
          <FaYoutube />
        </FooterLinkStyleSocial>
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
        <FooterLinkStyle to="">Make Best Website with wecubs</FooterLinkStyle>
      </FooterLink>
    </Footer>
  );
}
