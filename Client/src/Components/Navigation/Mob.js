import React, { Component } from 'react'
import {Navigation,MobileMenu} from '../../Styles/Styled';
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../Logo/Logo'
import '../../Styles/NavMob.css'
import { Link } from 'react-router-dom';

export default class Mob extends Component {
    ChnageNavStatus=()=>{
        this.setState({NavOpen:!this.state.NavOpen})
    }
    LinkClicked=()=>{
        this.setState({NavOpen:false})
    }
    state={
        NavOpen:false
    }
    render() {
        const {NavOpen} = this.state;
        const NavStyle = NavOpen ? null : ({display:"none"})
        return (
            <Navigation>
            <Logo />
        <div onClick={this.ChnageNavStatus} className='Bars'>
        {NavOpen ? <FaTimes /> : <FaBars />}
        </div>
        <MobileMenu style={NavStyle} className='MobileMenu'>
        <div className='CenterAbs'>
            <Link to='#' className='MobileMenu'>Home</Link>
            <Link to='#' className='MobileMenu'>Browse Movies</Link>
            <Link to='#' className='MobileMenu'>Tv Series</Link>
            <Link to='#' className='MobileMenu'>Live Tv</Link>
            <Link to='#' className='MobileMenu'>More</Link>
        </div>
        </MobileMenu>
                </Navigation>
        )
    }
}
