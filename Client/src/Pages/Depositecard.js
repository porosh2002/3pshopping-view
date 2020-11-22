import React, { Component } from "react";
import { URL } from "../serverUrl";
import { Input } from "../Styled";
export default class Depositecard extends Component {
   thisClick=()=>{
     const {data} = this.props;
    const id = data.userid;
const value = this.state.inputValue
    fetch(`${URL}api/addMoneyReq`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      id,value
      }),
    });
    window.location.reload(true);
}
   thisClickDelete=()=>{
     const {data} = this.props;
    const id = data._id
    fetch(`${URL}api/deleteMoney`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      id
      }),
    });
    window.location.reload(true);
}
state={
  inputValue:""
}
  render() {
    const {data} = this.props;
    return (
      <div style={{ display: "block", margin: "30px", fontSize: "20px" ,border:"2px solid #000",textAlign:"center"}}>
        <p style={{ margin: "30px", display: "inline-block" }}>{data.userid}</p>{" "}
        <p style={{ margin: "30px", display: "inline-block" }}>{data.tid}</p>
        <Input  onChange={(e)=>{this.setState({inputValue:e.target.value})}} type='number' placeholder='Enter Amount'/>
        <div
          onClick={this.thisClick}
          style={{
            margin: "30px",
            borderRadius: "3px",
            display: "inline-block",
            padding: "10px 7px",
            backgroundColor: "#444",
            color: "#f7f7f7",
            cursor: "pointer",
          }}
        >
       Approve Request
        </div>
        <div
          onClick={this.thisClickDelete}
          style={{
            margin: "30px",
            borderRadius: "3px",
            display: "inline-block",
            padding: "10px 7px",
            backgroundColor: "#444",
            color: "#f7f7f7",
            cursor: "pointer",
          }}
        >
       Delete Request
        </div>
      </div>
    );
  }
}
