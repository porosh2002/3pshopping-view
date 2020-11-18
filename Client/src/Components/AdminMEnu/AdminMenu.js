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
  } from "react-icons/vsc";
export default function Adminmenu() {
    return (
        <AdminMenu>
          <FooterLink>
            <FooterLinkStyle to="">
              Add Match{" "}
              <div>
                <VscAdd />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="">
              Add Match Result
              <div>
                <VscLoading />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="">
              Confirm Payment
              <div>
                <VscCheck />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to="">
              Make Payment
              <div>
                <VscCreditCard />
              </div>
            </FooterLinkStyle>
          </FooterLink>
        </AdminMenu>
    )
}
