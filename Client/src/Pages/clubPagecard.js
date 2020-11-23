import React, { Component } from "react";
import { URL } from "../serverUrl";
export default class Depositecard extends Component {
   thisClick=()=>{
     const {data} = this.props;
    const id = data._id;
    fetch(`${URL}api/clubblance`, {
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
        <p style={{ margin: "30px", display: "inline-block",color:"royalblue" }}>{data.name}</p>
        <p style={{ margin: "30px", display: "inline-block",color:"orangered" }}>{data.balance}</p>
      </div>
    );
  }
}
