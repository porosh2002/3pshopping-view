import React from 'react';
import '../../Styles/NavDesk.css';
import {Navigation} from '../../Styles/Styled';
import {Link} from 'react-router-dom';
import Logo from '../../Images/Logo.png';
export default function Desk() {
    return (
        <Navigation className='Navigation'>
            <Link className='LogoLink' to='/'>
            <img className='Logo' src={Logo} alt='Film Views' />
            </Link>
        </Navigation>
    )
}
