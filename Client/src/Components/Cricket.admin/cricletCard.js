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
const {id} = event.target;
if(id === '0'){
  this.setState({tossResult:0})
}
if(id === '1'){
  this.setState({tossResult:1})
}
if(id === '2'){
  this.setState({finalresult:2})
}
if(id === '3'){
  this.setState({finalresult:3})
}
if(id==='4'){
  this.setState({firstballres:4})
}
if(id==='5'){
  this.setState({firstballres:5})
}
if(id==='6'){
  this.setState({firstballres:6})
}
if(id==='7'){
  this.setState({firstballres:7})
}
if(id==='8'){
  this.setState({firstballres:8})
}
if(id==='9'){
  this.setState({firstballres:9})
}
if(id==='10'){
  this.setState({firstballres:10})
}
if(id==='11'){
  this.setState({firstovrRun:11})
}
if(id==='12'){
  this.setState({firstovrRun:12})
}
if(id==='13'){
  this.setState({firstovrRun:13})
}
if(id==='14'){
  this.setState({firstovrRun:14})
}
if(id==='15'){
  this.setState({firstWicket:15})
}
if(id==='16'){
  this.setState({firstWicket:16})
}
if(id==='17'){
  this.setState({firstWicketMethod:17})
}
if(id==='18'){
  this.setState({firstWicketMethod:18})
}
if(id==='19'){
  this.setState({firstWicketMethod:19})
}
if(id==='20'){
  this.setState({firstWicketMethod:20})
}
if(id==='21'){
  this.setState({firstWicketMethod:21})
}
if(id==='22'){
  this.setState({firstWicketMethod:22})
}
if(id==='23'){
  this.setState({WicketInPowerolay:23})
}
if(id==='24'){
  this.setState({WicketInPowerolay:24})
}
if(id==='25'){
  this.setState({WicketInPowerolay:25})
}
if(id==='26'){
  this.setState({Heightrunin1stover:26})
}
if(id==='27'){
  this.setState({Heightrunin1stover:27})
}
if(id==='28'){
  this.setState({Heightrunin1stover:28})
}
if(id==='29'){
  this.setState({Hsix:29})
}
if(id==='30'){
  this.setState({Hsix:30})
}
if(id==='31'){
  this.setState({Hsix:31})
}
if(id==='32'){
  this.setState({Hpatner:32})
}
if(id==='33'){
  this.setState({Hpatner:33})
}
if(id==='34'){
  this.setState({Hpatner:34})
}
if(id==='35'){
  this.setState({TopBatsman:35})
}
if(id==='36'){
  this.setState({TopBatsman:36})
}
if(id==='36'){
  this.setState({TopBowler:36})
}
if(id==='37'){
  this.setState({TopBowler:37})
}
if(id==='38'){
  this.setState({totalsix:38})
}
if(id==='39'){
  this.setState({totalsix:39})
}
if(id==='40'){
  this.setState({totalfour:40})
}
if(id==='41'){
  this.setState({totalfour:41})
}
if(id==='42'){
  this.setState({heightInvidualScore:42})
}
if(id==='43'){
  this.setState({heightInvidualScore:43})
}
if(id==='44'){
  this.setState({fifty:44})
}
if(id==='45'){
  this.setState({fifty:45})
}
if(id==='46'){
  this.setState({FirstinningsScore:46})
}
if(id==='47'){
  this.setState({FirstinningsScore:47})
}
if(id==='48'){
  this.setState({totalsixScore:48})
}
if(id==='49'){
  this.setState({totalsixScore:49})
}
if(id==='50'){
  this.setState({totalsixfour:50})
}
if(id==='51'){
  this.setState({totalsixfour:51})
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
