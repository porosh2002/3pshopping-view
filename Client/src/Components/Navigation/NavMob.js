import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { FaBars,FaTimes} from "react-icons/fa";
export default class NavMob extends Component {
  state={
    modalOpen:false,
  }
  makemodalOpenFalse=()=>{
    this.setState({modalOpen:false})
  }
    render() {     
      const {modalOpen} = this.state;  
      const style = modalOpen ? (null):({ display:"none" }) ;
      return (
<div>
<div className="navmob">
            <Link to="/">
              <img className="logo" src={logo} alt="Hq Bet 365" />
            </Link>
            <div className="bars">
            {this.state.modalOpen ? (<FaTimes  onClick={this.makemodalOpenFalse}/>):(<FaBars onClick={()=>{this.setState({modalOpen:true})}}/>)}
            </div>
          </div>
          <div style={style} className='nav-modal-mob'>
          <ul className='nav-ul ab-p-60'>
            <li><Link onClick={this.makemodalOpenFalse} className='menu-Link' to=''>Home</Link></li>
            <li><Link onClick={this.makemodalOpenFalse} className='menu-Link' to=''>Live Match</Link></li>
            <li><Link onClick={this.makemodalOpenFalse} className='menu-Link' to=''>Upcoming Match</Link></li>
            <li><Link onClick={this.makemodalOpenFalse} className='menu-Link' to='/login'>Login/Signup</Link></li>
        </ul>
          </div>
</div>
        )
    }
}
