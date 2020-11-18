import React, { Component } from "react";
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
class TennisCard extends Component {
  state = {
    betid:null,
    matchwin:null,
    pointE_O:null,
    matchPointO_U:null
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ betid: data._id});
  }

  render() {
    const { data } = this.props;
    return (
      <TennisDIV>
        <TennisTitle>To Win the Match Line</TennisTitle>
        <TennisTitleSub>{data.TS_T_A}</TennisTitleSub>
        <TennisTitleSub>{data.TS_T_B}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="0" onClick={this.betclick}>
          {data.TS_T_A_R_F}
        </TennisTitleSub>
        <TennisTitleSub id="1" onClick={this.betclick}>
          {data.TS_T_B_R_F}
        </TennisTitleSub>
        <TennisTitle>Total Match Point</TennisTitle>
        <TennisTitleSub>{"Odd"}</TennisTitleSub>
        <TennisTitleSub>{"Even"}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="2" onClick={this.betclick}>
          {data.TS_T_M_P_O}
        </TennisTitleSub>
        <TennisTitleSub id="3" onClick={this.betclick}>
          {data.TS_T_M_P_E}
        </TennisTitleSub>
        <TennisTitle>1st Game Total Point</TennisTitle>
        <TennisTitleSub>{"Over 18.5"}</TennisTitleSub>
        <TennisTitleSub>{"Under 18.5"}</TennisTitleSub>
        <br></br>
        <TennisTitleSub id="4" onClick={this.betclick}>
          {data.TS_T_M_P_O_18}
        </TennisTitleSub>
        <TennisTitleSub id="5" onClick={this.betclick}>
          {data.TS_T_M_P_U_18}
        </TennisTitleSub>
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
