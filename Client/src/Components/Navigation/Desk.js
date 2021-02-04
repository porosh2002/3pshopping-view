import React from 'react';
import '../../Styles/NavDesk.css';
import {Navigation} from '../../Styles/Styled';
import {Link} from 'react-router-dom';
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
                    <li><Link to='/'>Drama</Link></li>
                    <li><Link to='/'>Comedy</Link></li>
                    <li><Link to='/'>Action</Link></li>
                    <li><Link to='/'>Animation</Link></li>
                </ul>
            </nav>
        </Navigation>
    )
}
