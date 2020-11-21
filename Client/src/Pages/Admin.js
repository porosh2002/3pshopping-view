import React, { Component } from "react";
import { URL } from "../serverUrl";
import AdminMenu from '../Components/AdminMEnu/AdminMenu'
import {
  Button,
  Input,
  AdminContent,
  AdminCTitle,
  Select,
} from "../Styled";
export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      Football: false,
      TableTenis: false,
      Criclet: false,
      FB_T_A: "",
      FB_T_B: "",
      FB_T_A_R: "",
      FB_T_B_R: "",
      FB_T_Half_D: "",
      FB_T_A_W: "",
      FB_T_B_W: "",
      FB_T_F_D: "",
      FB_T_G_E: "",
      FB_T_G_O: "",
      FB_T_P_Y: "",
      FB_T_P_N: "",
      FB_T_M_G_1: "",
      FB_T_M_G_2: "",
      FB_T_M_G_3: "",
      FB_T_M_G_4: "",
      FB_T_M_G_5: "",
      FB_T_M_G_5_M: "",
      TS_T_A: "",
      TS_T_B: "",
      TS_T_A_R_F: "",
      TS_T_B_R_F: "",
      TS_T_M_P_O: "",
      TS_T_M_P_E: "",
      TS_T_M_P_O_18: "",
      TS_T_M_P_U_18: "",
      C_T_A:'',
      C_T_B:'',
      C_T_A_T:'',
      C_T_B_T:'',
      F_M_R_A:'',
      F_M_R_B:'',
      F_B_F_I_0:'',
      F_B_F_I_1:'',
      F_B_F_I_2:'',
      F_B_F_I_3:'',
      F_B_F_I_4:'',
      F_B_F_I_6:'',
      TS_T_A_R_more:'',
      F_O_F_I_3:'',
      TS_T_A_R_F_6:'',
      F_O_F_I_9:'',
      F_O_F_I_10:'',
      F_W_F_I_O:'',
      F_W_F_I_U:'',
      F_W_M_F_I_C:'',
      F_W_M_F_I_R:'',
      F_W_M_F_I_S:'',
      F_W_M_F_I_B:'',
      F_W_M_F_I_LBW:'',
      F_W_M_F_I_OTHR:'',
      W_P_P_N:'',
      W_P_P_1:'',
      W_P_P_N_2:'',
      H_R_F_O_A:'',
      H_R_F_O_B:'',
      H_R_F_O_D:'',
      H_S_A:'',
      H_S_B:'',
      H_S_T:'',
      H_P_A:'',
      H_P_B:'',
      H_P_T:'',
      T_B_T_A:'',
      T_B_T_B:'',
      T_BO_T_A:'',
      T_BO_T_B:'',
      H_T_T_S_A:'',
      H_T_T_S_B:'',
      H_T_T_F_A:'',
      H_T_T_F_B:'',
      H_I_S_OV:'',
      H_I_S_UN:'',
      S_FY:'',
      S_FN:'',
      F_I_S_O:'',
      F_I_S_U:'',
      T_M_S_OV:'',
      T_M_S_UN:'',
      T_M_F_OV:'',
      T_M_F_UN:'',
    };
  }
  MatchSelect = (event) => {
    const name = event.target.value;
    if (name !== "null") {
      if (name === "tabletennis") {
        this.setState({ TableTenis: true, Football: false, Criclet: false });
      }
      if (name === "cricket") {
        this.setState({ TableTenis: false, Football: false, Criclet: true });
      }
      if (name === "football") {
        this.setState({ TableTenis: false, Football: true, Criclet: false });
      }
    }
  };
  submitFootballMatch = (event) => {
    const {
      FB_T_A,
      FB_T_B,
      FB_T_A_R,
      FB_T_B_R,
      FB_T_Half_D,
      FB_T_A_W,
      FB_T_B_W,
      FB_T_F_D,
      FB_T_G_E,
      FB_T_G_O,
      FB_T_P_Y,
      FB_T_P_N,
      FB_T_M_G_1,
      FB_T_M_G_2,
      FB_T_M_G_3,
      FB_T_M_G_4,
      FB_T_M_G_5,
      FB_T_M_G_5_M,
    } = this.state;
    fetch(`${URL}api/footballMatchAdd`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FB_T_A,
        FB_T_B,
        FB_T_A_R,
        FB_T_B_R,
        FB_T_Half_D,
        FB_T_A_W,
        FB_T_B_W,
        FB_T_F_D,
        FB_T_G_E,
        FB_T_G_O,
        FB_T_P_Y,
        FB_T_P_N,
        FB_T_M_G_1,
        FB_T_M_G_2,
        FB_T_M_G_3,
        FB_T_M_G_4,
        FB_T_M_G_5,
        FB_T_M_G_5_M,
      }),
    });
  };
  submitTenisMatch = (event) => {
    // event.preventDefault();
    const {
      TS_T_A,
      TS_T_B,
      TS_T_A_R_F,
      TS_T_B_R_F,
      TS_T_M_P_O,
      TS_T_M_P_E,
      TS_T_M_P_O_18,
      TS_T_M_P_U_18,
    } = this.state;
    fetch(`${URL}api/tenisMatchAdd`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TS_T_A,
        TS_T_B,
        TS_T_A_R_F,
        TS_T_B_R_F,
        TS_T_M_P_O,
        TS_T_M_P_E,
        TS_T_M_P_O_18,
        TS_T_M_P_U_18,
      }),
    });
  };
  submitCricketMatch=(event)=>{
    event.preventDefault();
    const{
      C_T_A,
      C_T_B,
      C_T_A_T,
      C_T_B_T,
      F_M_R_A,
      F_M_R_B,
      F_B_F_I_0,
      F_B_F_I_1,
      F_B_F_I_2,
      F_B_F_I_3,
      F_B_F_I_4,
      F_B_F_I_6,
      TS_T_A_R_more,
      F_O_F_I_3,
      TS_T_A_R_F_6,
      F_O_F_I_9,
      F_O_F_I_10,
      F_W_F_I_O,
      F_W_F_I_U,
      F_W_M_F_I_C,
      F_W_M_F_I_R,
      F_W_M_F_I_S,
      F_W_M_F_I_B,
      F_W_M_F_I_LBW,
      F_W_M_F_I_OTHR,
      W_P_P_N,
      W_P_P_1,
      W_P_P_N_2,
      H_R_F_O_A,
      H_R_F_O_B,
      H_R_F_O_D,
      H_S_A,
      H_S_B,
      H_S_T,
      H_P_A,
      H_P_B,
      H_P_T,
      T_B_T_A,
      T_B_T_B,
      T_BO_T_A,
      T_BO_T_B,
      H_T_T_S_A,
      H_T_T_S_B,
      H_T_T_F_A,
      H_T_T_F_B,
      H_I_S_OV,
      H_I_S_UN,
      S_FY,
      S_FN,
      F_I_S_O,
      F_I_S_U,
      T_M_S_OV,
      T_M_S_UN,
      T_M_F_OV,
      T_M_F_UN
    } = this.state
    fetch(`${URL}api/cricketMatchAdd`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        C_T_A,
        C_T_B,
        C_T_A_T,
        C_T_B_T,
        F_M_R_A,
        F_M_R_B,
        F_B_F_I_0,
        F_B_F_I_1,
        F_B_F_I_2,
        F_B_F_I_3,
        F_B_F_I_4,
        F_B_F_I_6,
        TS_T_A_R_more,
        F_O_F_I_3,
        TS_T_A_R_F_6,
        F_O_F_I_9,
        F_O_F_I_10,
        F_W_F_I_O,
        F_W_F_I_U,
        F_W_M_F_I_C,
        F_W_M_F_I_R,
        F_W_M_F_I_S,
        F_W_M_F_I_B,
        F_W_M_F_I_LBW,
        F_W_M_F_I_OTHR,
        W_P_P_N,
        W_P_P_1,
        W_P_P_N_2,
        H_R_F_O_A,
        H_R_F_O_B,
        H_R_F_O_D,
        H_S_A,
        H_S_B,
        H_S_T,
        H_P_A,
        H_P_B,
        H_P_T,
        T_B_T_A,
        T_B_T_B,
        T_BO_T_A,
        T_BO_T_B,
        H_T_T_S_A,
        H_T_T_S_B,
        H_T_T_F_A,
        H_T_T_F_B,
        H_I_S_OV,
        H_I_S_UN,
        S_FY,
        S_FN,
        F_I_S_O,
        F_I_S_U,
        T_M_S_OV,
        T_M_S_UN,
        T_M_F_OV,
        T_M_F_UN
      }),
    });





  }
  inputvalue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { Football, TableTenis, Criclet } = this.state;
    const StyleFootball = Football ? null : { display: "none" };
    const StyleTenis = TableTenis ? null : { display: "none" };
    const StyleCricket = Criclet ? null : { display: "none" };
    return (
      <div>
<AdminMenu />
        <AdminContent>
          <AdminCTitle>Add Match</AdminCTitle>
          <Select onChange={this.MatchSelect} name="cars" id="cars">
            <option value="null">Select Match</option>
            <option value="cricket">Cricket</option>
            <option value="football">Football</option>
            <option value="tabletennis">Table Tennis</option>
          </Select>
        </AdminContent>
        <AdminContent style={StyleFootball}>
          <form onSubmit={this.submitFootballMatch}>
            <AdminCTitle>Team A</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="text"
              required
              name="FB_T_A"
            ></Input>
            <AdminCTitle>Team B</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="text"
              required
              name="FB_T_B"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>1st Half Time Result</span>
            </AdminCTitle>
            <AdminCTitle>Team A (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_A_R"
            ></Input>
            <AdminCTitle>Team B (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_B_R"
            ></Input>
            <AdminCTitle>Draw (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_Half_D"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Full Time Result</span>
            </AdminCTitle>
            <AdminCTitle>Team A (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_A_W"
            ></Input>
            <AdminCTitle>Team B (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_B_W"
            ></Input>
            <AdminCTitle>Draw (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_F_D"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Total Goal of Match</span>
            </AdminCTitle>
            <AdminCTitle>Even (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_G_E"
            ></Input>
            <AdminCTitle>Odd (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_G_O"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Penalty Match</span>
            </AdminCTitle>
            <AdminCTitle>Yes (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_P_Y"
            ></Input>
            <AdminCTitle>No (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_P_N"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Total Match Goal</span>
            </AdminCTitle>
            <AdminCTitle>1 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_1"
            ></Input>
            <AdminCTitle>2 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_2"
            ></Input>
            <AdminCTitle>3 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_3"
            ></Input>
            <AdminCTitle>4 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_4"
            ></Input>
            <AdminCTitle>5 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_5"
            ></Input>
            <AdminCTitle>5+ (Rate)</AdminCTitle>

            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="FB_T_M_G_5_M"
            ></Input>
            <Button type="submit" value=" ADD Football Match" />
          </form>
        </AdminContent>

        <AdminContent style={StyleTenis}>
          <form onSubmit={this.submitTenisMatch}>
            <AdminCTitle>Team A</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="text"
              required
              name="TS_T_A"
            ></Input>
            <AdminCTitle>Team B</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="text"
              required
              name="TS_T_B"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Final Result</span>
            </AdminCTitle>
            <AdminCTitle>Team A (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_A_R_F"
            ></Input>
            <AdminCTitle>Team B (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_B_R_F"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Total Match point</span>
            </AdminCTitle>
            <AdminCTitle>Odd (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_M_P_O"
            ></Input>
            <AdminCTitle>Even B (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_M_P_E"
            ></Input>
            <AdminCTitle>
              <span style={{ color: "orangered" }}>Total Match point</span>
            </AdminCTitle>
            <AdminCTitle>Over 18.5 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_M_P_O_18"
            ></Input>
            <AdminCTitle>under 18.5 (Rate)</AdminCTitle>
            <Input
              onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_M_P_U_18"
            ></Input>
            <Button type="submit" value=" ADD Tenis Match" />
          </form>
        </AdminContent>








        <AdminContent style={StyleCricket}>
        <form onSubmit={this.submitCricketMatch}>
          <AdminCTitle>Team A</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="text"
              required
              name="C_T_A"></Input>
          <AdminCTitle>Team B</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="text"
              required
              name="C_T_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Toss Result</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="C_T_A_T"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="C_T_B_T"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Final Match Result</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_M_R_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_M_R_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              1st ball of the 1st Innings
            </span>
          </AdminCTitle>
          <AdminCTitle>Dot Ball (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_0"></Input>
          <AdminCTitle>1 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_1"></Input>
          <AdminCTitle>2 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_2"></Input>
          <AdminCTitle>3 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_3"></Input>
          <AdminCTitle>4 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_4"></Input>
          <AdminCTitle>6 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_B_F_I_6"></Input>
          <AdminCTitle>Others (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_A_R_more"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              1st Over of the 1st Innings
            </span>
          </AdminCTitle>
          <AdminCTitle>0-3 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_O_F_I_3"></Input>
          <AdminCTitle>4-6 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="TS_T_A_R_F_6"></Input>
          <AdminCTitle>7-9 Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_O_F_I_9"></Input>
          <AdminCTitle>10+ Run (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_O_F_I_10"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              Run at Fall of 1st wicket of 1st Innings
            </span>
          </AdminCTitle>
          <AdminCTitle>over 23.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_F_I_O"></Input>
          <AdminCTitle>under 23.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_F_I_U"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              1st wicket method of 1st Innings
            </span>
          </AdminCTitle>
          <AdminCTitle>Caught Out (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_C"></Input>
          <AdminCTitle>Run Out (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_R"></Input>
          <AdminCTitle>Stumped Out (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_S"></Input>
          <AdminCTitle>Bowled Out (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_B"></Input>
          <AdminCTitle>LBW Out (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_LBW"></Input>
          <AdminCTitle>Others (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_W_M_F_I_OTHR"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              Wicket in Powerplay in 1st Innings
            </span>
          </AdminCTitle>
          <AdminCTitle>no Wickets (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="W_P_P_N"></Input>
          <AdminCTitle>1 Wickets (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="W_P_P_1"></Input>
          <AdminCTitle>2+ Wickets (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="W_P_P_N_2"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height Run in 1st Over</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_R_F_O_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_R_F_O_B"></Input>
          <AdminCTitle>Tie (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_R_F_O_D"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height six</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_S_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_S_B"></Input>
          <AdminCTitle>Tie (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_S_T"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height Patnership</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_P_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_P_B"></Input>
          <AdminCTitle>Tie (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_P_T"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Team of Top Batsman</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_B_T_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_B_T_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Team of Top Bowler</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_BO_T_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_BO_T_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height Team Total Six</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_T_T_S_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_T_T_S_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height Team Total Four</span>
          </AdminCTitle>
          <AdminCTitle>Team A (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_T_T_F_A"></Input>
          <AdminCTitle>Team B (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_T_T_F_B"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Height Individual Score</span>
          </AdminCTitle>
          <AdminCTitle>over 63.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_I_S_OV"></Input>
          <AdminCTitle>under 63.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="H_I_S_UN"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>
              Fifty Scored in the match
            </span>
          </AdminCTitle>
          <AdminCTitle>Yes (Rate)</AdminCTitle>
          <Input onChange={this.inputvalue}
              type="number"
              required
              name="S_FY"></Input>
          <AdminCTitle>No (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="S_FN"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>1st Innings Score</span>
          </AdminCTitle>
          <AdminCTitle>over 173.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_I_S_O"></Input>
          <AdminCTitle>under 173.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="F_I_S_U"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Total Match Six</span>
          </AdminCTitle>
          <AdminCTitle>over 11.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_M_S_OV"></Input>
          <AdminCTitle>under 11.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_M_S_UN"></Input>
          <AdminCTitle>
            <span style={{ color: "orangered" }}>Total Match Four</span>
          </AdminCTitle>
          <AdminCTitle>over 27.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_M_F_OV"></Input>
          <AdminCTitle>under 27.5 (Rate)</AdminCTitle>
          <Input               onChange={this.inputvalue}
              type="number"
              required
              name="T_M_F_UN"></Input>
          <Button type="submit" value=" ADD Cricket Match" />
          </form>
        </AdminContent>
      </div>
    );
  }
}
