import React from 'react'
import {Navigation} from '../../Styles/Styled';
import {FaBars} from 'react-icons/fa'
import Logo from '../Logo/Logo'
export default function Mob() {
    return (
        <Navigation>
    <Logo />
<div className='Bars'>
<FaBars />
</div>
        </Navigation>
    )
}
