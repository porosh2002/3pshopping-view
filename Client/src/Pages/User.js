import React, { Component } from "react";
import { AdminContent, UserCard, Input, AdminCTitle, Button } from "../Styled";
import { Link } from "react-router-dom";
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
  };
  render() {
    const { addbalance, withdrawbalance } = this.state;
    const addstyle = addbalance ? null : { display: "none" };
    const outstyle = withdrawbalance ? null : { display: "none" };
    return (
      <AdminContent>
        <UserCard>0 Coin <FcSalesPerformance /></UserCard>
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
const mapDispatchToProps = dispatch => {
    return {
      setUserID: (user) => dispatch(setUser(user)),
    };
  };
export default connect(null,mapDispatchToProps)(User);
