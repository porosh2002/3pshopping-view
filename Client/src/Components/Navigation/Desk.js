import React, { Component } from 'react'
import '../../Styles/NavDesk.css';
import {Navigation} from '../../Styles/Styled';
import {Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import {GiFilmProjector} from 'react-icons/gi'
export default class Desk extends Component {
    render() {
        return (
            <Navigation className='Navigation'>
            <Link className='LogoLink' to='/'>
            <div className='LogoIcon'><GiFilmProjector /></div>
            Film Views
            </Link>
                <ul className='NavContentUL'>
                    <li><Link className='NavLinkDesk' to='/'>Home</Link></li>
                    <li><Link  onMouseEnter={this.ChangeMenuStatus} className='NavLinkDesk' to='/'> Browse Movies</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>Tv Series</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>Live Tv</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>More</Link></li>
                </ul>
            <div className='SearchWrap'>
<div className='SearchContent'>
<input className='SearchBox' type='text' placeholder='search...' spellCheck='false' />
                <div className='SearchIcon'>
                <div className='SearchIconWrap'>
                <BiSearchAlt />
                </div>
                </div>
</div>
            </div>
        </Navigation>
        )
    }
}