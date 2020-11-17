import React, { Component } from 'react'
import {AdminContent,UserCard,Input,AdminCTitle,Button} from '../Styled';
import {Link} from 'react-router-dom'
export default class User extends Component {
    state={
        addbalance:false,
        withdrawbalance:false
    }
    render() {
        const{addbalance,withdrawbalance}=this.state;
        const addstyle=addbalance? null :({display:"none"})
        const outstyle=withdrawbalance? null :({display:"none"})
        return (
            <AdminContent>
            <UserCard>
                Balance : 0
            </UserCard>
            <UserCard><Link style={{color:"royalblue",textDecoration:"none"}} onClick={()=>{this.setState({addbalance:true,withdrawbalance:false})}} to='#'>Add Balance</Link></UserCard>
            <UserCard> <Link style={{color:"royalblue",textDecoration:"none"}} onClick={()=>{this.setState({addbalance:false,withdrawbalance:true})}} to='#'>Withdraw Balance (min-500 max-20,000)</Link></UserCard>
<form style={addstyle}>
            <AdminCTitle style={{marginTop:"100px"}}>Add Balance</AdminCTitle>
<Input required placeholder='Enter Bkash Transition ID'></Input>
            <Button value='Submit' type='submit'></Button>
</form>
<form style={outstyle}>
            <AdminCTitle style={{marginTop:"100px"}}>Withdrawal</AdminCTitle>
<Input required placeholder='Enter Withdrawal amount'></Input>
<Input required placeholder='Enter Your Bkash Number'></Input>
            <Button value='Submit' type='submit'></Button>
</form>
        </AdminContent>
        )
    }
}
