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
    betid:'',
    halfValue:'',
    halfSection:false,
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ betid: data._id });
  }
  submitdata=()=>{
    const{betid,halfValue} = this.state;
    fetch(`${URL}api/fthfRes`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,halfValue
      }),
    });
  }
  betclickHalf = (event) => {
    const {id} = event.target;
    this.setState({halfValue:id})
  };
  render() {
    const {
      FB_T_A,
      FB_T_B,
      // FB_T_A_R,
      // FB_T_B_R,
      // FB_T_Half_D,
      // FB_T_A_W,
      // FB_T_B_W,
      // FB_T_F_D,
      // FB_T_G_E,
      // FB_T_G_O,
      // FB_T_P_Y,
      // FB_T_P_N,
      // FB_T_M_G_1,
      // FB_T_M_G_2,
      // FB_T_M_G_3,
      // FB_T_M_G_4,
      // FB_T_M_G_5,
      // FB_T_M_G_5_M
    } = this.props.data
    const { getAmount } = this.state;
    const getAmountStyle = getAmount ? null : { display: "none" };
    return (
      <div>
      <TennisDIV style={{backgroundColor:"lightgreen"}}>
      <TennisTitle>{FB_T_A}</TennisTitle>
      VS
<TennisTitle>{FB_T_B}</TennisTitle>
<TennisTitle>First Half Time Result</TennisTitle>
<TennisTitleSub id='0' onClick={this.betclickHalf}>{FB_T_A}</TennisTitleSub>
<TennisTitleSub id='1' onClick={this.betclickHalf}>{FB_T_B}</TennisTitleSub>
<TennisTitleSub id='2' onClick={this.betclickHalf}>Draw</TennisTitleSub><br></br>
<button onClick={this.submitdata}>Submit</button>
<br></br>
<TennisTitle>Full Time Result</TennisTitle>
<TennisTitleSub>{FB_T_A}</TennisTitleSub>
<TennisTitleSub>{FB_T_B}</TennisTitleSub>
<TennisTitleSub>Draw</TennisTitleSub>
<br></br>
<TennisTitle>Total Goal of Match</TennisTitle>
<TennisTitleSub>Even</TennisTitleSub>
<TennisTitleSub>Odd</TennisTitleSub><br></br>
<TennisTitle>Penalty Match</TennisTitle>
<TennisTitleSub>Yes</TennisTitleSub>
<TennisTitleSub>No</TennisTitleSub><br></br>
<TennisTitle>Total Match Goal</TennisTitle>
<TennisTitleSub>One</TennisTitleSub>
<TennisTitleSub>Two</TennisTitleSub>
<TennisTitleSub>Three</TennisTitleSub><br></br>
<br></br>
<TennisTitleSub>Four</TennisTitleSub>
<TennisTitleSub>Five</TennisTitleSub>
<TennisTitleSub>Five+</TennisTitleSub><br></br>
      </TennisDIV>
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userID: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, null)(TennisCard);
