import React, { PureComponent } from "react";
import {
  TennisDIV,
  TennisTitle,
  TennisTitleSub,
} from "../../Styled";
import { selectCurrentUser } from "../../Redux/user/user_selector";
import { connect } from "react-redux";
class TennisCard extends PureComponent {
  state = {
    betid: null,
  };
  componentDidMount() {

  }
  setbetamount = (event) => {
    this.setState({ betamount: event.target.value });
  };
  betclick = (event) => {
    if(this.props.userID !== undefined){
      const { id } = event.target;
      const betpriceGet = event.target.textContent;
      this.setState({
        betProject_id: id,
        betprice: betpriceGet,
        getAmount: true,
      });
    }
    else{
      alert('Login First')
    }
  };
  render() {
    const { getAmount } = this.state;
    const getAmountStyle = getAmount ? null : { display: "none" };
    const { 
        C_T_A,
        C_T_B,
    } = this.props.data;
    return (
      <TennisDIV style={{backgroundColor:"#93abd3"}}>
        <TennisTitle>{C_T_A}</TennisTitle>
        VS
        <TennisTitle>{C_T_B}</TennisTitle>
        <TennisTitle>To Win Toss</TennisTitle>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub><br></br>
        <br></br>
        <TennisTitle>Final Result</TennisTitle>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub><br></br>
        <TennisTitle>1st ball of the Innings</TennisTitle>
        <TennisTitleSub>Dot Ball</TennisTitleSub><br></br>
        <TennisTitleSub>One</TennisTitleSub>
        <TennisTitleSub>Two</TennisTitleSub>
        <TennisTitleSub>Three</TennisTitleSub><br></br>
{/*  */}
        <TennisTitleSub>Four</TennisTitleSub>
        <TennisTitleSub>Six</TennisTitleSub>
        <TennisTitleSub>Others</TennisTitleSub><br></br>
        {/*  */}
        <TennisTitle>1st Over of the 1st Innings</TennisTitle>
        <TennisTitleSub>0-3 Run</TennisTitleSub>
        <TennisTitleSub>4-6 Run</TennisTitleSub>
        <TennisTitleSub>7-9 Run</TennisTitleSub><br></br>
        <TennisTitleSub>10+ Run</TennisTitleSub><br></br>
        <TennisTitle>Run at Fall of 1st wicket of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>over 23.5 </TennisTitleSub>
        <TennisTitleSub>under 23.5</TennisTitleSub><br></br>
        <TennisTitle>1st wicket method of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>Caught Out </TennisTitleSub>
        <TennisTitleSub>Run Out </TennisTitleSub>
        <TennisTitleSub>Stumped</TennisTitleSub><br></br>
        <TennisTitleSub>Bowled Out</TennisTitleSub>
        <TennisTitleSub>LBW Out </TennisTitleSub>
        <TennisTitleSub>Others</TennisTitleSub><br></br>
        <TennisTitle>Wicket in Powerplay in 1st Innings</TennisTitle><br></br>
        <TennisTitleSub>no Wickets</TennisTitleSub>
        <TennisTitleSub>1 Wickets</TennisTitleSub>
        <TennisTitleSub>2+ Wickets</TennisTitleSub><br></br>
        <TennisTitle>Height Run in 1st Over</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitle>Height six</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitle>Height Patnership</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitleSub>Tie</TennisTitleSub><br></br>
        <TennisTitle>Team of Top Batsman</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitle>Team of Top Bowler</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Team Total Six</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Team Total Four</TennisTitle><br></br>
        <TennisTitleSub>{C_T_A}</TennisTitleSub>
        <TennisTitleSub>{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Individual Score</TennisTitle><br></br>
        <TennisTitleSub>over 63.5</TennisTitleSub>
        <TennisTitleSub>under 63.5</TennisTitleSub>
        <TennisTitle>Fifty Scored in the match</TennisTitle><br></br>
        <TennisTitleSub>Yes</TennisTitleSub>
        <TennisTitleSub>NO</TennisTitleSub>
        <TennisTitle>1st Innings Score</TennisTitle><br></br>
        <TennisTitleSub>over 173.5</TennisTitleSub>
        <TennisTitleSub>under 173.5</TennisTitleSub>
        <TennisTitle>Total Match Six</TennisTitle><br></br>
        <TennisTitleSub>over 11.5</TennisTitleSub>
        <TennisTitleSub>under 11.5</TennisTitleSub>
        <TennisTitle>Total Match Four</TennisTitle><br></br>
        <TennisTitleSub>over 27.5</TennisTitleSub>
        <TennisTitleSub>under 27.5</TennisTitleSub>
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
