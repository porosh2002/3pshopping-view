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
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Movies</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Advertise </Link></li>
                    <li><Link to='/'>More</Link></li>
                </ul>
            </nav>
            <div className='SearchWrap'>
<div className='SearchContent'>
<input className='SearchBox' type='search' placeholder='search...' />
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
