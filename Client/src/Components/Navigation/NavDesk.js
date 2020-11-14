import React from 'react'
import logo from '../../Images/logo.png';
import {Link} from 'react-router-dom'
export default function NavDesk() {
    return (
        <div className='navdesk'>
        <Link className='logo' to='/'>
            <img src={logo} alt='Hq Bet 365' />
        </Link>   
        <ul className='nav-ul'>
            <li><Link className='menu-Link' to=''>Home</Link></li>
            <li><Link className='menu-Link' to=''>Home</Link></li>
            <li><Link className='menu-Link' to=''>Home</Link></li>
            <li><Link className='menu-Link' to=''>Home</Link></li>
        </ul>
        </div>
    )
}
