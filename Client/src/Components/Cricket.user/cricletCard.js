import React, { PureComponent } from "react";
import {
  Button,
  Input,
  TennisDIV,
  TennisTitle,
  TennisTitleSub,
} from "../../Styled";
import { URL } from "../../serverUrl";
import { selectCurrentUser } from "../../Redux/user/user_selector";
import { connect } from "react-redux";
class TennisCard extends PureComponent {
  state = {
    userid:'',
    betamount: 0,
    betprice: null,
    betid: null,
    betProject_id: null,
    getAmount: false,
    userBalance:null,
  };
  componentDidMount() {
    const { data, userID } = this.props;
    fetch(`${URL}api/getuserdata`,{
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userID
      })
    }).then(res=>res.json()).then(res=>this.setState({userBalance:res[0].balance}))
    this.setState({ betid: data._id, userid: userID });
  }
  closegetamount = (event) => {
    this.setState({ getAmount: false });
    const {userid,betamount,betprice,betid,betProject_id,getAmount,userBalance} = this.state;
  const newBalance = userBalance - betamount;
  this.setState({userBalance:newBalance})
  fetch(`${URL}api/balanceEdit`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newBalance,userid
    }),
  });
  fetch(`${URL}api/tenisBet`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userid,betamount,betprice,betid,betProject_id,getAmount
    }),
  });
  };
  setbetamount = (event) => {
    this.setState({ betamount: event.target.value });
  };
  betclick = (event) => {
    // if(this.props.userID !== undefined){
    //   const { id } = event.target;
    //   const betpriceGet = event.target.textContent;
    //   this.setState({
    //     betProject_id: id,
    //     betprice: betpriceGet,
    //     getAmount: true,
    //   });
    // }
    // else{
    //   alert('Login First')
    // }
  };
  render() {
    const { getAmount } = this.state;
    const getAmountStyle = getAmount ? null : { display: "none" };
    const { 
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
        T_M_F_UN,
    } = this.props.data;
    return (
      <TennisDIV style={{backgroundColor:"#93abd3"}}>
        <TennisTitle>{C_T_A}</TennisTitle>
        VS
        <TennisTitle>{C_T_B}</TennisTitle>
        <TennisTitle>To Win Toss</TennisTitle>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{C_T_A_T}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{C_T_B_T}</TennisTitleSub>
        <br></br>
        <TennisTitle>Final Result</TennisTitle>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_M_R_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_M_R_B}</TennisTitleSub><br></br>
        <TennisTitle>1st ball of the Innings</TennisTitle>
        <TennisTitleSub>Dot Ball</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_0}</TennisTitleSub><br></br>
        <TennisTitleSub>One</TennisTitleSub>
        <TennisTitleSub>Two</TennisTitleSub>
        <TennisTitleSub>Three</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_1}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_2}</TennisTitleSub>
{/*  */}
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_3}</TennisTitleSub><br></br>
        <TennisTitleSub>Four</TennisTitleSub>
        <TennisTitleSub>Six</TennisTitleSub>
        <TennisTitleSub>Others</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_4}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_B_F_I_6}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{TS_T_A_R_more}</TennisTitleSub><br></br>
        {/*  */}
        <TennisTitle>1st Over of the 1st Innings</TennisTitle>
        <TennisTitleSub>0-3 Run</TennisTitleSub>
        <TennisTitleSub>4-6 Run</TennisTitleSub>
        <TennisTitleSub>7-9 Run</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_O_F_I_3}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{TS_T_A_R_F_6}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_O_F_I_9}</TennisTitleSub><br></br>
        <TennisTitleSub>10+ Run</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_O_F_I_10}</TennisTitleSub><br></br>
        <TennisTitle>Run at Fall of 1st wicket of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>over 23.5 </TennisTitleSub>
        <TennisTitleSub>under 23.5</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_F_I_O}</TennisTitleSub> 
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_F_I_U}</TennisTitleSub>
        <TennisTitle>1st wicket method of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>Caught Out </TennisTitleSub>
        <TennisTitleSub>Run Out </TennisTitleSub>
        <TennisTitleSub>Stumped</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_C}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_R}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_S}</TennisTitleSub><br></br>
        <TennisTitleSub>Bowled Out</TennisTitleSub>
        <TennisTitleSub>LBW Out </TennisTitleSub>
        <TennisTitleSub>Others</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_B}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_LBW}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_W_M_F_I_OTHR}</TennisTitleSub><br></br>
        <TennisTitle>Wicket in Powerplay in 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>no Wickets</TennisTitleSub>
        <TennisTitleSub>1 Wickets</TennisTitleSub>
        <TennisTitleSub>2+ Wickets</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{W_P_P_N}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{W_P_P_1}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{W_P_P_N_2}</TennisTitleSub><br></br>
        <TennisTitle>Height Run in 1st Over</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_R_F_O_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_R_F_O_B}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_R_F_O_D}</TennisTitleSub><br></br>
        <TennisTitle>Height six</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_S_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_S_B}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_S_T}</TennisTitleSub><br></br>
        <TennisTitle>Height Patnership</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_P_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_P_B}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_P_T}</TennisTitleSub><br></br>
        <TennisTitle>Team of Top Batsman</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_B_T_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_B_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitle>Team of Top Bowler</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_BO_T_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_BO_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitle>Height Team Total Six</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_T_T_S_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_T_T_S_B}</TennisTitleSub>
        <br></br>
        <TennisTitle>Height Team Total Four</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_T_T_F_A}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_T_T_F_B}</TennisTitleSub>
        <br></br>
        <TennisTitle>Height Individual Score</TennisTitle><br></br>
        <TennisTitleSub>over 63.5</TennisTitleSub>
        <TennisTitleSub>under 63.5</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_I_S_OV}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{H_I_S_UN}</TennisTitleSub>
        <br></br>
        <TennisTitle>Fifty Scored in the match</TennisTitle><br></br>
        <TennisTitleSub>Yes</TennisTitleSub>
        <TennisTitleSub>NO</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{S_FY}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{S_FN}</TennisTitleSub>
        <br></br>
        <TennisTitle>1st Innings Score</TennisTitle><br></br>
        <TennisTitleSub>over 173.5</TennisTitleSub>
        <TennisTitleSub>under 173.5</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_I_S_O}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{F_I_S_U}</TennisTitleSub>
        <br></br>
        <TennisTitle>Total Match Six</TennisTitle><br></br>
        <TennisTitleSub>over 11.5</TennisTitleSub>
        <TennisTitleSub>under 11.5</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_M_S_OV}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_M_S_UN}</TennisTitleSub>
        <br></br>
        <TennisTitle>Total Match Four</TennisTitle><br></br>
        <TennisTitleSub>over 27.5</TennisTitleSub>
        <TennisTitleSub>under 27.5</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_M_F_OV}</TennisTitleSub>
        <TennisTitleSub id="0" onClick={this.betclick}>{T_M_F_UN}</TennisTitleSub>
        <br></br>
        <div style={getAmountStyle}>
          <form
            onSubmit={this.closegetamount}
            className="ab-p-50"
            style={{ padding: "50px 20px", backgroundColor: "#444" }}
          >
            <Input
              min="10"
              max="200"
              required
              onChange={this.setbetamount}
              type="number"
              placeholder="Enter Amount"
            />
            <Button value="Submit" type="submit" />
          </form>
        </div>
      </TennisDIV>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userID: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, null)(TennisCard);
