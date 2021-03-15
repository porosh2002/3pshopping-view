import React, { Component } from 'react'
import {URL} from '../../serverUrl'
import axios from 'axios'
export default class ImageCard extends Component {
    state={
        name: null,
    }
    componentDidMount() {
        // axios.post(`${URL}api/image/info/name`,{
        //     ID:this.props.data,
        // }).then(res=>{
        //     this.setState({name:res.data})
        // })
    }
    
 render() {
     const {name} = this.state
        return (
            <div className='ImageCharecterDiv'>
                <img className='ImageOfCharecter' alt={name} src={`${URL}api/image/info/image/${this.props.data}`} />
                <p className='Charecter_Name'>{name}</p>
                <p className='Charecter_ID'>{this.props.data}</p>
            </div>
        )
    }
}
