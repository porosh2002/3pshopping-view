import React, { PureComponent } from "react";
import { URL } from "../../serverUrl";
import {
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
    fw:'',
    g_E_O:'',
    Penalty:'',
    GoalinNum:'',
    fw_res:false,
    g_E_O_res:false,
    Penalty_res:false,
    GoalinNum_res:false
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
  submitdataFull=()=>{
    const{betid,fw,g_E_O,Penalty,GoalinNum} = this.state;
    fetch(`${URL}api/footballfull`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid,fw,g_E_O,Penalty,GoalinNum
      }),
    });
  }
  betclickHalf = (event) => {
    const {id} = event.target;
    this.setState({halfValue:id})
  };
  betclick = (event) => {
    const {id} = event.target;
if(id==='3'){
this.setState({fw:3})
}
if(id==='4'){
this.setState({fw:4})
}
if(id==='5'){
this.setState({fw:5})
}
if(id==='6'){
this.setState({g_E_O:6})
}
if(id==='7'){
this.setState({g_E_O:7})
}
if(id==='8'){
this.setState({Penalty:8})
}
if(id==='9'){
this.setState({Penalty:9})
}
if(id==='10'){
this.setState({GoalinNum:10})
}
if(id==='11'){
this.setState({GoalinNum:11})
}
if(id==='12'){
this.setState({GoalinNum:12})
}
if(id==='13'){
this.setState({GoalinNum:13})
}
if(id==='14'){
this.setState({GoalinNum:14})
}
if(id==='15'){
this.setState({GoalinNum:15})
}
  };
  deletetennis=()=>{
    const {betid}= this.state;
    console.log(betid);
    fetch(`${URL}api/footballDelete`, {
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
      FB_T_A,
      FB_T_B,
      halfdone
    } = this.props.data
    const halfStyle = halfdone ?  { display: "none" } : null;
    return (
      <div>
      <TennisDIV style={{backgroundColor:"lightgreen"}}>
      <TennisTitle>{FB_T_A}</TennisTitle>
      VS
<TennisTitle>{FB_T_B}</TennisTitle>
<div style={halfStyle}>
<TennisTitle>First Half Time Result</TennisTitle>
<TennisTitleSub id='0' onClick={this.betclickHalf}>{FB_T_A}</TennisTitleSub>
<TennisTitleSub id='1' onClick={this.betclickHalf}>{FB_T_B}</TennisTitleSub>
<TennisTitleSub id='2' onClick={this.betclickHalf}>Draw</TennisTitleSub><br></br>
<button onClick={this.submitdata}>Submit</button>
</div>
<br></br>
<TennisTitle>Full Time Result</TennisTitle>
<TennisTitleSub id='3' onClick={this.betclick}>{FB_T_A}</TennisTitleSub>
<TennisTitleSub id='4' onClick={this.betclick}>{FB_T_B}</TennisTitleSub>
<TennisTitleSub id='5' onClick={this.betclick}>Draw</TennisTitleSub>
<br></br>
<TennisTitle>Total Goal of Match</TennisTitle>
<TennisTitleSub id='6' onClick={this.betclick}>Even</TennisTitleSub>
<TennisTitleSub id='7' onClick={this.betclick}>Odd</TennisTitleSub><br></br>
<TennisTitle>Penalty Match</TennisTitle>
<TennisTitleSub id='8' onClick={this.betclick}>Yes</TennisTitleSub>
<TennisTitleSub id='9' onClick={this.betclick}>No</TennisTitleSub><br></br>
<TennisTitle>Total Match Goal</TennisTitle>
<TennisTitleSub id='10' onClick={this.betclick}>One</TennisTitleSub>
<TennisTitleSub id='11' onClick={this.betclick}>Two</TennisTitleSub>
<TennisTitleSub id='12' onClick={this.betclick}>Three</TennisTitleSub><br></br>
<br></br>
<TennisTitleSub id='13' onClick={this.betclick}>Four</TennisTitleSub>
<TennisTitleSub id='14' onClick={this.betclick}>Five</TennisTitleSub>
<TennisTitleSub id='15' onClick={this.betclick}>Five+</TennisTitleSub><br></br>
<button onClick={this.submitdataFull}>Submit</button>
<button style={{margin:"100px", padding:"10px",backgroundColor:"orangered"}} onClick={this.deletetennis}>Delete This Bet</button>
      </TennisDIV>
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
