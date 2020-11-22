import React from 'react'
import { URL } from "../serverUrl";
export default function Depositecard({data}) {
    const thisClick=()=>{
        const id = data._id
        fetch(`${URL}api/deleteMoney`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
          id
          }),
        });
    }
    return (
        <div
        style={{ display: "block", margin: "30px", fontSize: "20px" }}
      >
        <p style={{ margin: "30px", display: "inline-block" }}>
          {data.userid}
        </p>{" "}
        <p style={{ margin: "30px", display: "inline-block" }}>
          {data.tid}
        </p>
        <div
          onClick={thisClick}
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
          {}
        </div>
      </div>
    )
}
