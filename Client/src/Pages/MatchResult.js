import React from "react";
import Adminmenu from "../Components/AdminMEnu/AdminMenu";
import Tennis from "../Components/Tennis.Admin/Tennis";
import Football from "../Components/Football.admin/Football";
import Cricket from "../Components/Cricket.admin/cricket";
export default function MatchResult() {
  return (
    <div>
      <Adminmenu />
      <Cricket />
      <Football />
      <Tennis />
    </div>
  );
}
