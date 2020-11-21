import React, { Component } from "react";
import {TennisDIV, TennisTitle, TennisTitleSub } from "../../Styled";
import { URL } from "../../serverUrl";
import { selectCurrentUser } from "../../Redux/user/user_selector";
import { connect } from "react-redux";
class TennisCard extends Component {
  state = {
    betid:'',
    matchwin:'',
    pointE_O:'',
    matchPointO_U:'',
    sectiononeDisable: false,
    sectiontwoDisable: false,
    sectionthreeDisable: false,
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ betid: data._id });
  }
  betclick = (event) => {
    if(event.target.id==='0'){
      this.setState({matchwin:0,sectiononeDisable:true})
    }
    if(event.target.id==='1'){
      this.setState({matchwin:1,sectiononeDisable:true})
    }
    if(event.target.id==='2'){
      this.setState({pointE_O:2,sectiontwoDisable:true})
    }
    if(event.target.id==='3'){
      this.setState({pointE_O:3,sectiontwoDisable:true})
    }
    if(event.target.id==='4'){
      this.setState({matchPointO_U:4,sectionthreeDisable:true})
    }
    if(event.target.id==='5'){
      this.setState({matchPointO_U:5,sectionthreeDisable:true})
    }
  };
  deletetennis=()=>{
    window.location.reload(true);
    const {betid}= this.state;
    console.log(betid);
    fetch(`${URL}api/tennisDelete`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        betid
      }),
    });
  }
  // betid !== null && matchwin !==null && pointE_O !==null && matchPointO_U !==null && betProjectid !==null
  submitdata=()=>{
    const{betid,matchwin,pointE_O,matchPointO_U} = this.state;
      fetch(`${URL}api/tennisResult`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          betid,matchwin,pointE_O,matchPointO_U
        }),
      });
  }
  render() {
    const {
      sectiononeDisable,
      sectionthreeDisable,
      sectiontwoDisable,
    } = this.state;
    const oneStyle = sectiononeDisable ? { display: "none" } : null;
    const twoStyle = sectiontwoDisable ? { display: "none" } : null;
    const threeStyle = sectionthreeDisable ? { display: "none" } : null;
    const { data } = this.props;
    return (
      <TennisDIV>
        <div style={oneStyle}>
          <TennisTitle>To Win the Match Line</TennisTitle>
          <TennisTitleSub onClick={this.betclick} id="0">{data.TS_T_A}</TennisTitleSub>
          <TennisTitleSub onClick={this.betclick} id="1">{data.TS_T_B}</TennisTitleSub>
        </div>
        <br></br>
        <div style={twoStyle}>
          <TennisTitle>Total Match Point</TennisTitle>
          <TennisTitleSub onClick={this.betclick} id="2">{"Odd"}</TennisTitleSub>
          <TennisTitleSub onClick={this.betclick} id="3">{"Even"}</TennisTitleSub>
        </div>
        <br></br>
        <div style={threeStyle}>
          <TennisTitle>1st Game Total Point</TennisTitle>
          <TennisTitleSub onClick={this.betclick} id="4">{"Over 18.5"}</TennisTitleSub>
          <TennisTitleSub onClick={this.betclick} id="5">{"Under 18.5"}</TennisTitleSub>
        </div>
        <br></br>
        <button onClick={this.submitdata}>Submit</button>
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
