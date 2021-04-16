import React, { Component } from 'react'
import {URL} from '../../serverUrl'
import axios from 'axios'
import MovieCard from './MovieCard'
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
        const data = this.state.data

        return (
            <div>
                {data.length !== 0 ? data.map((i)=>{
                   return  <MovieCard data={i} key={i._id} />
                }): <div></div>}
            </div>
        )
    }
}
