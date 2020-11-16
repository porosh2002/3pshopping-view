import React, { Component } from "react";
import { AdminMenu, FooterLinkStyle, FooterLink } from "../Styled";
import {
  VscAdd,
  VscAccount,
  VscCheck,
  VscCreditCard,
  VscLoading,
} from "react-icons/vsc";
export default class Admin extends Component {
  render() {
    return (
      <AdminMenu>
        <FooterLink>
          <FooterLinkStyle>
            Add Match{" "}
            <div>
              <VscAdd />
            </div>
          </FooterLinkStyle>
        </FooterLink>
        <FooterLink>
          <FooterLinkStyle>
            Add Match Result{" "}
            <div>
              <VscLoading />
            </div>
          </FooterLinkStyle>
        </FooterLink>
        <FooterLink>
          <FooterLinkStyle>
            User's Details{" "}
            <div>
              <VscAccount />
            </div>
          </FooterLinkStyle>
        </FooterLink>
        <FooterLink>
          <FooterLinkStyle>
            Confirm Payment{" "}
            <div>
              <VscCheck />
            </div>
          </FooterLinkStyle>
        </FooterLink>
        <FooterLink>
          <FooterLinkStyle>
            Make Payment{" "}
            <div>
              <VscCreditCard />
            </div>
          </FooterLinkStyle>
        </FooterLink>
      </AdminMenu>
    );
  }
}
