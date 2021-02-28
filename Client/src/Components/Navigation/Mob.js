import React, { Component } from 'react'
import {Navigation,MobileMenu} from '../../Styles/Styled';
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../Logo/Logo'
import '../../Styles/NavMob.css'
import { Link } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
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
        <div onClick={this.ChnageNavStatus} className='Bars'>
        {NavOpen ? <FaTimes /> : <FaBars />}
        </div>
            <Logo />
        <div className='SearchIcon'><BiSearchAlt /></div>
        <MobileMenu style={NavStyle} className='MobileMenu'>
        <div className='CenterAbs'>
            <Link to='#' onClick={this.LinkClicked} className='MobileMenu'>Home</Link>
            <Link to='/browse' onClick={this.LinkClicked} className='MobileMenu'>Browse Movies</Link>
            <Link to='#' onClick={this.LinkClicked} className='MobileMenu'>Tv Series</Link>
            <Link to='#' onClick={this.LinkClicked} className='MobileMenu'>Live Tv</Link>
            <Link to='/Request' onClick={this.LinkClicked} className='MobileMenu'>Request</Link>
            <Link to='/login' onClick={this.LinkClicked} className='MobileMenu'>Login</Link>
            <Link to='#' onClick={this.LinkClicked} className='MobileMenu'>Signup</Link>
        </div>
        </MobileMenu>
                </Navigation>
        )
    }
}
