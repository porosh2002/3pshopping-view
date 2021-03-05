import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/TopNav.css'
export default function TopNav() {
    return (
        <div className='TopNav'>
            <p className='TopNavText'>Great Movies Feel You Better</p>
<div>
<Link className='TopNavLink' to='/community/signup'>Join Community</Link>
</div>
        </div>
    )
}
