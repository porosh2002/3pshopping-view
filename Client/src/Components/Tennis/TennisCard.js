import React, { Component } from 'react'
import {Button, Input, TennisDIV,TennisTitle,TennisTitleSub} from '../../Styled'
export default class TennisCard extends Component {
state={
userid:null,
betamount:0,
betprice:null,
betid:null,
betProject_id:null,
getAmount:false,
    }
    componentDidMount() {
        const{data} = this.props
        this.setState({betid:data._id})
    }
    closegetamount=()=>{
this.setState({getAmount:false})
    }
    setbetamount=event=>{
        this.setState({betamount:event.target.value})
    }
betclick=(event)=>{
    const{id}= event.target;
    const betpriceGet = event.target.textContent;
    this.setState({betProject_id:id,betprice:betpriceGet,getAmount:true})
;
}
    render() {
        const {getAmount} = this.state;
        const getAmountStyle = getAmount ?null:({display:"none"})
        const {data} = this.props
        return (
        <TennisDIV>
            <TennisTitle>To Win the Match Line</TennisTitle>
            <TennisTitleSub>{data.TS_T_A}</TennisTitleSub>
            <TennisTitleSub>{data.TS_T_B}</TennisTitleSub><br></br>
            <TennisTitleSub id='0' onClick={this.betclick}>{data.TS_T_A_R_F}</TennisTitleSub>
            <TennisTitleSub id='1' onClick={this.betclick}>{data.TS_T_B_R_F}</TennisTitleSub>
            <TennisTitle>Total Match Point</TennisTitle>
            <TennisTitleSub>{'Odd'}</TennisTitleSub>
            <TennisTitleSub>{'Even'}</TennisTitleSub><br></br>
            <TennisTitleSub id='2' onClick={this.betclick}>{data.TS_T_M_P_O}</TennisTitleSub>
            <TennisTitleSub id='3' onClick={this.betclick}>{data.TS_T_M_P_E}</TennisTitleSub>
            <TennisTitle>1st Game Total Point</TennisTitle>
            <TennisTitleSub>{'Over 18.5'}</TennisTitleSub>
            <TennisTitleSub>{'Under 18.5'}</TennisTitleSub><br></br>
            <TennisTitleSub id='4' onClick={this.betclick}>{data.TS_T_M_P_O_18}</TennisTitleSub>
            <TennisTitleSub id='5' onClick={this.betclick}>{data.TS_T_M_P_U_18}</TennisTitleSub>
<div style={getAmountStyle}>
<form onSubmit={this.closegetamount} className='ab-p-50' style={{padding:"50px 20px",backgroundColor:'#444'}}><Input min='10' max='200' required onChange={this.setbetamount}  type='number' placeholder='Enter Amount'/>
            <Button value='Submit' type='submit'/>
            </form>
</div>
        </TennisDIV>
        )
    }
}
