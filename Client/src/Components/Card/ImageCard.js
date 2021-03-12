import React, { Component } from 'react'
import {URL} from '../../serverUrl'
import axios from 'axios'
export default class ImageCard extends Component {
    state={
        name: null,
        Image:null
    }
    componentDidMount() {
        axios.post(`${URL}api/image/info/name`,{
            ID:this.props.data
        }).then(res=>{
            this.setState({name:res.data})
        })
        axios.get(`${URL}api/image/info/image/${this.props.data}`,{
        }).then((res2)=>{
            this.setState({Image:res2})
            console.log(res2);
        })
    }
    
 render() {
     const {name,Image} = this.state
        return (
            <div>
                {name}
                <img alt={name} src={Image} />
            </div>
        )
    }
}
