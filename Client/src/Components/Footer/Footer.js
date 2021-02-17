import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import {AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import {FaTwitter,FaTelegramPlane} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import Logo from '../Logo/Logo'
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
            <Link to='' className='SocialLinkFooter'><AiFillFacebook /></Link>
            <Link to='' className='SocialLinkFooter'><FaTwitter /></Link>
            <Link to='' className='SocialLinkFooter'><AiFillInstagram /></Link>
            <Link to='' className='SocialLinkFooter'><FaTelegramPlane /></Link>
            <Link to='' className='SocialLinkFooter'><AiFillYoutube /></Link>
            </div>
            <p>© 2021-{moment().format("YYYY")} Film Views</p>
        </div>
    )
}
