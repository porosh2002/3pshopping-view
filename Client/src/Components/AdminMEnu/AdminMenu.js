import React from 'react'
import {
    AdminMenu,
    FooterLinkStyle,
    FooterLink,
  } from "../../Styled";
  import {
    VscAdd,
    VscCheck,
    VscCreditCard,
    VscLoading,
    VscExtensions
  } from "react-icons/vsc";
export default function Adminmenu() {
    return (
        <AdminMenu>
          <FooterLink>
            <FooterLinkStyle to="/admin">
              Add Match{" "}
              <div>
                <VscAdd />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="/result">
              Add Match Result
              <div>
                <VscLoading />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="/deposite">
              Confirm Payment
              <div>
                <VscCheck />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="/payment">
              Make Payment
              <div>
                <VscCreditCard />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="/club">
              Club
              <div>
                <VscExtensions/>
              </div>
            </FooterLinkStyle>
          </FooterLink>
        </AdminMenu>
    )
}
