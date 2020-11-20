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
            Add Balance
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
            Withdraw Balance (min-500 max-20,000)
          </Link>
        </UserCard>
        <UserCard onClick={()=>{this.props.setUserID(undefined)}} style={{ cursor: "pointer" }}>Logout</UserCard>
        <form style={addstyle}>
          <AdminCTitle style={{ marginTop: "100px" }}>Add Balance</AdminCTitle>
          <Input required placeholder="Enter Bkash Transition ID"></Input>
          <Button value="Submit" type="submit"></Button>
        </form>
        <form style={outstyle}>
          <AdminCTitle style={{ marginTop: "100px" }}>Withdrawal</AdminCTitle>
          <Input required placeholder="Enter Withdrawal amount"></Input>
          <Input required placeholder="Enter Your Bkash Number"></Input>
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
