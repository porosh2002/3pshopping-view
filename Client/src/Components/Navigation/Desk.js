import React, { Component } from 'react'
import '../../Styles/NavDesk.css';
import {Navigation} from '../../Styles/Styled';
import {Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
export default class Desk extends Component {
    constructor(){
        super()
        this.state={
            MenuOpen:false,
            DelayTime:1500
        }
    }
    ChangeMenuStatus = () =>{
        this.setState({MenuOpen:true})
    }
    ChangeMenuStatusAction = () =>{
        this.setState({MenuOpen:true,DelayTime:null})
    }
    ChangeMenuStatusLeave = () =>{
        const {DelayTime} = this.state;
        setTimeout(()=>{
            this.setState({MenuOpen:false})
        },DelayTime)
    }
    render() {
        const {MenuOpen} = this.state;
        const MenuStyle = MenuOpen ? null : ({display:"none"})
        return (
            <Navigation className='Navigation'>
            <Link className='LogoLink' to='/'>
            Film Views
            </Link>
                <ul className='NavContentUL'>
                    <li><Link className='NavLinkDesk' to='/'>Home</Link></li>
                    <li><Link onMouseLeave={this.ChangeMenuStatusLeave} onMouseEnter={this.ChangeMenuStatus} className='NavLinkDesk' to='/'>Movies</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>Tv Series</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>Live Tv</Link></li>
                    <li><Link className='NavLinkDesk' to='/'>More</Link></li>
                </ul>
            <div className='SearchWrap'>
<div className='SearchContent'>
<input className='SearchBox' type='text' placeholder='search...' spellCheck='false' />
                <div className='SearchIcon'>
                <div className='SearchIconWrap'>
                <BiSearchAlt />
                </div>
                </div>
</div>
            </div>
            <div style={MenuStyle} onMouseEnter={this.ChangeMenuStatusAction} className='MoviesModal'>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Drama</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Comedy</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Action</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Crime</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Animation</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Family</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Romance</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Horror</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Thriller</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Mystery</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Historical</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Fantasy</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Adventure</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Sci-fi</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>War</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>History</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Biography</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Sport</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Bangla</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Korean</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>Superhero</Link></li>
                <li className='ModalLink'><Link to='#' className='ModalLink'>South Indian</Link></li>
            </div>
        </Navigation>
        )
    }
}