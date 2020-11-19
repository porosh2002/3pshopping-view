import React, { PureComponent } from "react";
import { URL } from "../../serverUrl";
import {
  Button,
  Input,
  TennisDIV,
  TennisTitle,
  TennisTitleSub,
} from "../../Styled";
import { selectCurrentUser } from "../../Redux/user/user_selector";
import { connect } from "react-redux";
class TennisCard extends PureComponent {
  state = {
    userid:'',
  };
  componentDidMount() {
    const {userID } = this.props;
    fetch(`${URL}api/getuserdata`,{
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userID
      })
    }).then(res=>res.json()).then(res=>this.setState({userBalance:res[0].balance}))
    this.setState({userid: userID });
  }
  render() {
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
      FB_T_M_G_5_M
    } = this.props.data
    console.log(this.props.data);
    return (
      <TennisDIV style={{backgroundColor:"lightgreen"}}>
      <TennisTitle>{FB_T_A}</TennisTitle>
      VS
<TennisTitle>{FB_T_B}</TennisTitle>
<TennisTitle>First Half Time Result</TennisTitle>
<TennisTitleSub>{FB_T_A}</TennisTitleSub>
<TennisTitleSub>{FB_T_B}</TennisTitleSub>
<br></br>
<TennisTitle>Full Time Result</TennisTitle>
<TennisTitle>Total Goal of Match</TennisTitle>
<TennisTitle>Penalty Match</TennisTitle>
<TennisTitle>Total Match Goal</TennisTitle>
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
