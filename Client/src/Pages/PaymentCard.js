import React, { Component } from "react";
import { URL } from "../serverUrl";
export default class Depositecard extends Component {
   thisClick=()=>{
     const {data} = this.props;
    const id = data._id;
    fetch(`${URL}api/deletePayment`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      id
      }),
    });
    window.location.reload(true);
}
  render() {
    const {data} = this.props;
    return (
      <div style={{ display: "block", margin: "30px", fontSize: "20px" ,border:"2px solid #000",textAlign:"center"}}>
        <p style={{ margin: "30px", display: "inline-block" }}>{data.userid}</p>{" "}
        <p style={{ margin: "30px", display: "inline-block",color:"royalblue" }}>{data.tid}</p>
        <p style={{ margin: "30px", display: "inline-block",color:"orangered" }}>{data.withamount}</p>
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
       Submit
        </div>
      </div>
    );
  }
}