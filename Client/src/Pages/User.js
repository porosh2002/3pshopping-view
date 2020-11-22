import React, { Component } from "react";
import { AdminContent, UserCard, Input, AdminCTitle, Button } from "../Styled";
import { Link } from "react-router-dom";
import {URL} from '../serverUrl';
import {selectCurrentUser} from '../Redux/user/user_selector'
import { connect } from "react-redux";
import { setUser } from "../Redux/user/actions";
import { FcSalesPerformance } from "react-icons/fc";
class User extends Component {
  state = {
    addbalance: false,
    withdrawbalance: false,
    addbkashid: "",
    outBkashNumber: "",
    outAmmount: "",
    Balance:0,
    withamount:null,
    tid:null
  };
  componentDidMount() {
      const{userID} = this.props
    fetch(`${URL}api/getuserdata`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userID
        }),
      }).then(res=>res.json()).then(res=>{this.setState({Balance:res[0].balance})})
  }
  addBalance=()=>{
    const{userID} = this.props;
    const{addbkashid}=this.state
    fetch(`${URL}api/addmoney`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          userID,addbkashid
      }),
    })
  }
  withdrawaddBalance=()=>{
    const{userID} = this.props;
    const {withamount,tid,Balance}= this.state;
    if(Balance - withamount > 1){
      fetch(`${URL}api/outmoney`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              userID,withamount,
              tid
          }),
        })
    }
    else{
      alert('Not Enough Balance')
    }
  }
  render() {
    const { addbalance, withdrawbalance } = this.state;
    const addstyle = addbalance ? null : { display: "none" };
    const outstyle = withdrawbalance ? null : { display: "none" };
    return (
      <AdminContent>
        <UserCard>{this.state.Balance} Coin <FcSalesPerformance /></UserCard>
        <UserCard>
          <Link
            style={{ color: "royalblue", textDecoration: "none" }}
            onClick={() => {
              this.setState({ addbalance: true, withdrawbalance: false });
            }}
            to="#"
          >
            Add Coin(min 200)
          </Link>
        </UserCard>
        <UserCard>
          {" "}
          <Link
            style={{ color: "royalblue", textDecoration: "none" }}
            onClick={() => {
              this.setState({ addbalance: false, withdrawbalance: true });
            }}
            to="#"
          >
            Withdraw Coin
          </Link>
        </UserCard>
        <UserCard onClick={()=>{this.props.setUserID(undefined)}} style={{ cursor: "pointer" }}>Logout</UserCard>
        <form onSubmit={this.addBalance} style={addstyle}>
          <AdminCTitle style={{ marginTop: "100px" }}>Add Coin</AdminCTitle>
          <Input onChange={(e)=>{this.setState({addbkashid:e.target.value})}} required placeholder="Enter Bkash Transition ID"></Input>
          <p style={{fontSize:"20px",color:"orangered"}}> Send Money to 01944752947 (BKASH Personal) and Enter Transition ID in upper box and submit || 1 Taka = 1 Coin || Contact with this number before pay</p>
          <Button value="Submit" type="submit"></Button>
        </form>
        <form onSubmit={this.withdrawaddBalance} style={outstyle}>
          <AdminCTitle style={{ marginTop: "100px" }}>Withdrawal(min-500 , max-20,000)</AdminCTitle>
          <Input onChange={e=>{this.setState({withamount:e.target.value})}} min='500' max='20000' type='number' required placeholder="Enter Withdrawal amount"></Input>
          <Input onChange={e=>{this.setState({tid:e.target.value})}} min='11' type='number' required placeholder="+880**********(your Bkash Number)"></Input>
          <Button value="Submit" type="submit"></Button>
        </form>
      </AdminContent>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      userID: selectCurrentUser(state),
    };
  };
const mapDispatchToProps = dispatch => {
    return {
      setUserID: (user) => dispatch(setUser(user)),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(User);
