import React, { PureComponent } from 'react'
import Menu from '../Components/AdminMEnu/AdminMenu'
import {URL} from '../serverUrl'
export default class Deposite extends PureComponent {
    state={
        data:[]
    }
    componentDidMount() {
        fetch(`${URL}api/deposite`).then(res=>res.json()).then(res=>this.setState({data:res}))
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <Menu />
                {this.state.data.map((data,i)=>{
                    return <div key={i} style={{display:"block",margin:"30px",fontSize:"20px"}}>
                        <p style={{margin:"30px",display:"inline-block"}}>{data.userid}</p> <p style={{margin:"30px",display:"inline-block"}}>{data.tid}</p>
                        <div style={{margin:"30px",borderRadius:"3px",display:"inline-block",padding:"10px 7px",backgroundColor:"#444",color:"#f7f7f7",cursor:"pointer"}}>Approve</div>
                    </div>
                })}
            </div>
        )
    }
}
