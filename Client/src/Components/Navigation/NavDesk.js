import React from 'react'
import logo from '../../Images/logo.png';
import {Link} from 'react-router-dom'
export default function NavDesk() {
    return (
        <div className='navdesk'>
        <Link to='/'>
            <img style={{height:"90%"}} src={logo} alt='Hq Bet 365' />
        </Link>   
        <ul className='nav-ul'>
            <li><Link className='menu-Link' to=''>Home</Link></li>
            <li><Link className='menu-Link' to=''>Live Match</Link></li>
            <li><Link className='menu-Link' to=''>Account</Link></li>
            <li><Link className='menu-Link' to=''>Upcoming Match</Link></li>
            <li><Link className='menu-Link' to='/login'>Login/Signup</Link></li>
        </ul>
        </div>
    )
}
