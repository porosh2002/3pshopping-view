import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import Logo from '../Logo/Logo'
import Social from '../Social/Social';
export default function Footer() {
    return (
        <div className='Footer'>
        <div className='FooterContent'>
        <Logo />
        </div>
            <div className='FooterContent FooterLinkContent'>
            <Link className="NavLinkFooter" to="/">
              Request
            </Link>
            <Link className="NavLinkFooter" to="/">
              About us
            </Link>
            <Link className="NavLinkFooter" to="/">
              Contact us
            </Link>
            <Link className="NavLinkFooter" to="/">
              DMCA
            </Link>
            </div>
            <div className='FooterContent'>
                <p className='FooterTitle'>
                Contact us : 
                </p>
                <p>
                <span className='ContactFooterTitle'>Email</span> : example@example.com
                </p>
            </div>
            <div className='FooterContent'>
<Social />
            </div>
            <p>© 2021-{moment().format("YYYY")} Film Views</p>
        </div>
    )
}
