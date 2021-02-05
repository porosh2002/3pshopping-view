import React from 'react';
import '../../Styles/NavDesk.css';
import {Navigation} from '../../Styles/Styled';
import {Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
// import Logo from '../../Images/Logo.png';
export default function Desk() {
    return (
        <Navigation className='Navigation'>
            <Link className='LogoLink' to='/'>
            Film Views
            </Link>
                <ul className='NavContentUL'>
                    <li><Link className='NavLinkDesk' to='/'>Home</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>Movies</Link></li>
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
