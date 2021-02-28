import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import {FaTwitter,FaTelegramPlane} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
export default function Social() {
    return (
<>
<Link to='' className='SocialLinkFooter'><AiFillFacebook /></Link>
            <Link to='' className='SocialLinkFooter'><FaTwitter /></Link>
            <Link to='' className='SocialLinkFooter'><AiFillInstagram /></Link>
            <Link to='' className='SocialLinkFooter'><FaTelegramPlane /></Link>
            <Link to='' className='SocialLinkFooter'><AiFillYoutube /></Link>
</>
    )
}
