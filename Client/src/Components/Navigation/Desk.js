import React, { Component } from "react";
import "../../Styles/NavDesk.css";
import { Navigation } from "../../Styles/Styled";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import Logo from '../Logo/Logo'
export default class Desk extends Component {
  render() {

    return (
      <Navigation className="Navigation">
<Logo />
        <ul className="NavContentUL">
<div className='mainLink'>
<li>
            <Link className="NavLinkDesk" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="NavLinkDesk"
              to="/browse"
            >
              Browse Movies
            </Link>
          </li>
          <li>
            <Link className="NavLinkDesk" to="/">
              Tv Series
            </Link>
          </li>
          <li>
            <Link className="NavLinkDesk" to="/">
              Live Tv
            </Link>
          </li>
          <li>
            <Link className="NavLinkDesk" to="/Request">
              Request
            </Link>
          </li>
</div>
        </ul>
        <div className="SearchWrap">
          <div className="SearchContent">
            <input
              className="SearchBox"
              type="text"
              placeholder="search..."
              spellCheck="false"
            />
            <div className="SearchIcon">
              <div className="SearchIconWrap">
                <BiSearchAlt />
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    );
  }
}
