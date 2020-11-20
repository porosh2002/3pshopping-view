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
    tossResult:'',
    finalresult:'',
    firstballres:'',
    firstovrRun:'',
    firstOverHeight:'',
    firstWicket:'',
    firstWicketMethod:'',
    WicketInPowerolay:'',
    Heightrunin1stover:'',
    Hsix:'',
    Hpatner:'',
    TopBatsman:'',
    TopBowler:'',
    totalsix:"",
    totalfour:"",
    heightInvidualScore:"",
    fifty:'',
    FirstinningsScore:'',
    totalsixScore:'',
    totalsixfour:'',
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ betid: data._id });
  }
  betclick = (event) => {
console.log(event.target.id);
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
        <TennisTitleSub onClick={this.betclick} id="0">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="1">{C_T_B}</TennisTitleSub><br></br>
        <br></br>
        <TennisTitle>Final Result</TennisTitle>
        <TennisTitleSub onClick={this.betclick} id="2">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="3">{C_T_B}</TennisTitleSub><br></br>
        <TennisTitle>1st ball of the Innings</TennisTitle>
        <TennisTitleSub onClick={this.betclick} id="4">Dot Ball</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="5">One</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="6">Two</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="7">Three</TennisTitleSub><br></br>
{/*  */}
        <TennisTitleSub onClick={this.betclick} id="8">Four</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="9">Six</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="10">Others</TennisTitleSub><br></br>
        {/*  */}
        <TennisTitle>1st Over of the 1st Innings</TennisTitle>
        <TennisTitleSub onClick={this.betclick} id="11">0-3 Run</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="12">4-6 Run</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="13">7-9 Run</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="14">10+ Run</TennisTitleSub><br></br>
        <TennisTitle>Run at Fall of 1st wicket of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="15">over 23.5 </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="16">under 23.5</TennisTitleSub><br></br>
        <TennisTitle>1st wicket method of 1st Innings</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="17">Caught Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="18">Run Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="19">Stumped</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="20">Bowled Out</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="21">LBW Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="22">Others</TennisTitleSub><br></br>
        <TennisTitle>Wicket in Powerplay in 1st Innings</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="23">no Wickets</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="24">1 Wickets</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="25">2+ Wickets</TennisTitleSub><br></br>
        <TennisTitle>Height Run in 1st Over</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="26">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="27">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="28">Tie</TennisTitleSub><br></br>
        <TennisTitle>Height six</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="29">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="30">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="31">Tie</TennisTitleSub><br></br>
        <TennisTitle>Height Patnership</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="32">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="33">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="34">Tie</TennisTitleSub><br></br>
        <TennisTitle>Team of Top Batsman</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="35">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="36">{C_T_B}</TennisTitleSub>
        <TennisTitle>Team of Top Bowler</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="37">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="38">{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Team Total Six</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="39">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="40">{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Team Total Four</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="41">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="42">{C_T_B}</TennisTitleSub>
        <TennisTitle>Height Individual Score</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="43">over 63.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="44">under 63.5</TennisTitleSub>
        <TennisTitle>Fifty Scored in the match</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="45">Yes</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="46">NO</TennisTitleSub>
        <TennisTitle>1st Innings Score</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="47">over 173.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="48">under 173.5</TennisTitleSub>
        <TennisTitle>Total Match Six</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="49">over 11.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="50">under 11.5</TennisTitleSub>
        <TennisTitle>Total Match Four</TennisTitle><br></br>
        <TennisTitleSub onClick={this.betclick} id="51">over 27.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="52">under 27.5</TennisTitleSub>
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
