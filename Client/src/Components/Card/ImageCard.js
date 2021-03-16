import React from "react";
import { URL } from "../../serverUrl";

export default function ImageCard({ data }) {
  const { ID, ImageName } = data;
  return (
    <div className="ImageCharecterDiv">
      <img
        className="ImageOfCharecter"
        alt={ImageName}
        src={`${URL}api/image/info/image/${ID}`}
      />
      <p className="Charecter_Name">{ImageName}</p>
      <p className="Charecter_ID">{ID}</p>
    </div>
  );
}
