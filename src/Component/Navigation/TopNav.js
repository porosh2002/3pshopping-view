import React from 'react'
import './TopNav.css'
import {Link} from 'react-router-dom'
export default function TopNav() {
    return (
        <div className='top-nav'>
            <p className='wlcm'>3pshopping এ আপনাকে স্বাগতম </p>
            <div className='links-div'>
                <Link className='link' to=''>পুরাতন পন্য ক্রয় বিক্রয়</Link>
                <Link className='link' to=''>Become a Vendor</Link>
                <Link className='link' to=''>Profile</Link>
                <Link className='link' to=''>Login</Link>
            </div>
        </div>
    )
}
