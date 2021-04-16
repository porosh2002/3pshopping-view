import React, { Component } from 'react'
import {URL} from '../../serverUrl'
import axios from 'axios'
export default class MovieCardList extends Component {
    state={
        data:[]
    }
    componentDidMount() {
        axios.get(`${URL}api/movie/${this.props.name}`).then(res=>{
            this.setState({data:res.data})
        })
    }
    
    render() {
        console.log(this.state.data);
        return (
            <div>
                
            </div>
        )
    }
}
