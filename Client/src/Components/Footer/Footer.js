import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineMail} from 'react-icons/hi'
export default function Footer() {
    return (
        <div className='Footer'>
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
                <span className='ContactFooterTitle'>Email</span> : jamilkashem@zoho.com
                </p>
            </div>
        </div>
    )
}
