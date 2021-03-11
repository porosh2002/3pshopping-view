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
            axios.post(`${URL}api/image/info/image`,{
                ID:this.props.data
            }).then(res=>{
                this.setState({Image:res.data})
            })
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
