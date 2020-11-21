import React, { PureComponent } from "react";
import {
  TennisDIV,
  TennisTitle,
  TennisTitleSub,
} from "../../Styled";
import {URL} from '../../serverUrl'
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
    tossWin:false,
    firstballinnings:false,
    firstoverinnings:false,
    firstwicketfallinRun:false,
    firstwicketmethod:false,
    wicketinpowerplay:false,
    finalResult:false,
    heightRunin1stovr:false,
    heightsix:false,
    heightfour:false,
    heightpatnership:false,
    topBatsman:false,
    topBowler:false,
    H_total_six:false,
    H_total_four:false,
    H_Own_score:false,
    FiftyMade:false,
    FirstInnScore:false,
    totalSix:false,
    totalfour:false,
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
if(id==='37'){
  this.setState({TopBowler:37})
}
if(id==='38'){
  this.setState({TopBowler:38})
}
if(id==='39'){
  this.setState({totalsix:39})
}
if(id==='40'){
  this.setState({totalsix:40})
}
if(id==='41'){
  this.setState({totalfour:41})
}
if(id==='42'){
  this.setState({totalfour:42})
}
if(id==='43'){
  this.setState({heightInvidualScore:43})
}
if(id==='44'){
  this.setState({heightInvidualScore:44})
}
if(id==='45'){
  this.setState({fifty:45})
}
if(id==='46'){
  this.setState({fifty:46})
}
if(id==='47'){
  this.setState({FirstinningsScore:47})
}
if(id==='48'){
  this.setState({FirstinningsScore:48})
}
if(id==='49'){
  this.setState({totalsixScore:49})
}
if(id==='50'){
  this.setState({totalsixScore:50})
}
if(id==='51'){
  this.setState({totalsixfour:51})
}
if(id==='52'){
  this.setState({totalsixfour:52})
}
  };
  submitdatatoss=()=>{
    const{betid,tossResult} = this.state;
    fetch(`${URL}api/tossCricket`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,tossResult
      }),
    });
  }
  submitdatafirstball=()=>{
    const{betid,firstballres} = this.state;
    fetch(`${URL}api/firstballCricket`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,firstballres
      }),
    });
  }
  submitdatafirstover=()=>{
    const{betid,firstovrRun} = this.state;
    fetch(`${URL}api/firstOverCricket`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,firstovrRun
      }),
    });
  }
  firstwicketandmethfull=()=>{
    const{betid,firstWicket,firstWicketMethod} = this.state;
    fetch(`${URL}api/firstwicketandmethfull`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,firstWicket,firstWicketMethod
      }),
    });
  }
  finalcricket=()=>{
    const{betid,
      Heightrunin1stover,
      Hsix,
      Hpatner,
      TopBatsman,
      TopBowler,
      totalsix,
      totalfour,
      heightInvidualScore,
      fifty,
      FirstinningsScor,
      totalsixScore,
      totalsixfour,
    
    } = this.state;
    fetch(`${URL}api/finalcricket`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,
      Heightrunin1stover,
      Hsix,
      Hpatner,
      TopBatsman,
      TopBowler,
      totalsix,
      totalfour,
      heightInvidualScore,
      fifty,
      FirstinningsScor,
      totalsixScore,
      totalsixfour,
      }),
    });
  }
  powerplayCricket=()=>{
    const{betid,WicketInPowerolay} = this.state;
    fetch(`${URL}api/powerplayCricket`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,WicketInPowerolay
      }),
    });
  }
  deletetennis=()=>{
    const {betid}= this.state;
    console.log(betid);
    fetch(`${URL}api/CricketDelete`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid
      }),
    });
    window.location.reload(true);
  }
  render() {
    const { 
        C_T_A,
        C_T_B,
    } = this.props.data;
    const {      tossWin,
      firstballinnings,
      firstoverinnings,
      firstwicketfallinRun,
      firstwicketmethod,
      wicketinpowerplay,
      finalResult,
      heightRunin1stovr,
      heightsix,
      heightfour,
      heightpatnership,
      topBatsman,
      topBowler,
      H_total_six,
      H_total_four,
      H_Own_score,
      FiftyMade,
      FirstInnScore,
      totalSix,
      totalfour}= this.state
    const TossStyle = tossWin ? {display:"none"} :null
    const FirstBallINN = firstballinnings ? {display:"none"} :null
    const FirstOvrINN = firstoverinnings ? {display:"none"} :null
    const FirstwicketfallRUN = firstwicketfallinRun ? {display:"none"} :null
    const FirstwicketMeth = firstwicketmethod ? {display:"none"} :null
    const PowerplayWicket = wicketinpowerplay ? {display:"none"} :null
    const FinalResult = finalResult ? {display:"none"} :null
    const HeightRunFirstOvr =  heightRunin1stovr ? {display:"none"} :null
    const HeightSix = heightsix ? {display:"none"} :null
    // const HeightFour = heightfour ? {display:"none"} :null
    const heightpatnersHip = heightpatnership ? {display:"none"} :null
    const topBatsmaN = topBatsman ? {display:"none"} :null
    const TopBowler = topBowler ? {display:"none"} :null
    const H_total_siX = H_total_six ? {display:"none"} :null
    const H_total_fouR = H_total_four ? {display:"none"} :null
    const H_Own_scorE = H_Own_score ? {display:"none"} :null
    const FiftyMadE = FiftyMade ? {display:"none"} :null
    const FirstInnScorE = FirstInnScore ? {display:"none"} :null
    const totalSiX = totalSix ? {display:"none"} :null
    const totalfouR = totalfour ? {display:"none"} :null
    return (
      <TennisDIV style={{backgroundColor:"#93abd3"}}>
        <TennisTitle>{C_T_A}</TennisTitle>
        VS
        <TennisTitle>{C_T_B}</TennisTitle>
<div>
          <TennisTitle>To Win Toss</TennisTitle>
<div style={TossStyle}>
        <TennisTitleSub onClick={this.betclick} id="0">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="1">{C_T_B}</TennisTitleSub><br></br>
</div>
        <br></br>
        <button onClick={this.submitdatatoss}>Submit</button>
</div>
        <TennisTitle>1st ball of the Innings</TennisTitle>
 <div style={FirstBallINN}>
 <TennisTitleSub onClick={this.betclick} id="4">Dot Ball</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="5">One</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="6">Two</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="7">Three</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="8">Four</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="9">Six</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="10">Others</TennisTitleSub><br></br>
 </div>
        <button onClick={this.submitdatafirstball}>Submit</button>
        <TennisTitle>1st Over of the 1st Innings</TennisTitle>
<div style={FirstOvrINN}>
<TennisTitleSub onClick={this.betclick} id="11">0-3 Run</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="12">4-6 Run</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="13">7-9 Run</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="14">10+ Run</TennisTitleSub><br></br>
</div>
        <button onClick={this.submitdatafirstover}>Submit</button>

        <TennisTitle>Run at Fall of 1st wicket of 1st Innings</TennisTitle><br></br>
<div style={FirstwicketfallRUN}>
<TennisTitleSub onClick={this.betclick} id="15">over 23.5 </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="16">under 23.5</TennisTitleSub><br></br>
        </div>
        <TennisTitle>1st wicket method of 1st Innings</TennisTitle><br></br>
<div style={FirstwicketMeth}>
<TennisTitleSub onClick={this.betclick} id="17">Caught Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="18">Run Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="19">Stumped</TennisTitleSub><br></br>
        <TennisTitleSub onClick={this.betclick} id="20">Bowled Out</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="21">LBW Out </TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="22">Others</TennisTitleSub><br></br>
</div>
          <button onClick={this.firstwicketandmethfull}>Submit</button>    
          <TennisTitle>Wicket in Powerplay in 1st Innings</TennisTitle><br></br>
<div style={PowerplayWicket}>
<TennisTitleSub onClick={this.betclick} id="23">no Wickets</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="24">1 Wickets</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="25">2+ Wickets</TennisTitleSub><br></br>
</div>
<button onClick={this.powerplayCricket}>Submit</button>
        <TennisTitle>Final Result</TennisTitle>
<div style={FinalResult}>
<TennisTitleSub onClick={this.betclick} id="2">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="3">{C_T_B}</TennisTitleSub><br></br>
</div>

        <TennisTitle>Height Run in 1st Over</TennisTitle><br></br>
<div style={HeightRunFirstOvr}>
<TennisTitleSub onClick={this.betclick} id="26">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="27">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="28">Tie</TennisTitleSub><br></br>
</div>
        <TennisTitle>Height six</TennisTitle><br></br>
<div style={HeightSix}>
<TennisTitleSub onClick={this.betclick} id="29">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="30">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="31">Tie</TennisTitleSub><br></br>
</div>
        <TennisTitle>Height Patnership</TennisTitle><br></br>
<div style={heightpatnersHip}>
<TennisTitleSub onClick={this.betclick} id="32">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="33">{C_T_B}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="34">Tie</TennisTitleSub><br></br>
</div>
        <TennisTitle>Team of Top Batsman</TennisTitle><br></br>
<div style={topBatsmaN}>
<TennisTitleSub onClick={this.betclick} id="35">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="36">{C_T_B}</TennisTitleSub>
</div>
        <TennisTitle>Team of Top Bowler</TennisTitle><br></br>
<div style={TopBowler}>
<TennisTitleSub onClick={this.betclick} id="37">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="38">{C_T_B}</TennisTitleSub>
</div>
        <TennisTitle>Height Team Total Six</TennisTitle><br></br>
<div style={H_total_siX}>
<TennisTitleSub onClick={this.betclick} id="39">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="40">{C_T_B}</TennisTitleSub>
</div>
        <TennisTitle>Height Team Total Four</TennisTitle><br></br>
<div style={H_total_fouR}>
<TennisTitleSub onClick={this.betclick} id="41">{C_T_A}</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="42">{C_T_B}</TennisTitleSub>
</div>
        <TennisTitle>Height Individual Score</TennisTitle><br></br>
        <div style={H_Own_scorE}>
        <TennisTitleSub onClick={this.betclick} id="43">over 63.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="44">under 63.5</TennisTitleSub>
        </div>
        <TennisTitle>Fifty Scored in the match</TennisTitle><br></br>
        <div style={FiftyMadE}>

        <TennisTitleSub onClick={this.betclick} id="45">Yes</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="46">NO</TennisTitleSub>
        </div>
        <TennisTitle>1st Innings Score</TennisTitle><br></br>
        <div style={FirstInnScorE}>
        <TennisTitleSub onClick={this.betclick} id="47">over 173.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="48">under 173.5</TennisTitleSub>
        </div>
        <TennisTitle>Total Match Six</TennisTitle><br></br>
        <div style={totalSiX}>

        <TennisTitleSub onClick={this.betclick} id="49">over 11.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="50">under 11.5</TennisTitleSub>
        </div>
        <TennisTitle>Total Match Four</TennisTitle><br></br>
        <div style={totalfouR}>
        <TennisTitleSub onClick={this.betclick} id="51">over 27.5</TennisTitleSub>
        <TennisTitleSub onClick={this.betclick} id="52">under 27.5</TennisTitleSub>
        </div>
        <button onClick={this.finalcricket}>Submit</button>
        <button style={{margin:"100px", padding:"10px",backgroundColor:"orangered"}} onClick={this.deletetennis}>Delete This Bet</button>
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
