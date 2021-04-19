import React, { PureComponent } from 'react'
import axios from "axios";
import {URL} from '../serverUrl'
export class Movie extends PureComponent {
    componentDidMount() {
        const MovieLink = this.props.match.params.name.replaceAll("-"," ");
        axios.get(`${URL}api/movie/specific/${MovieLink}`).then(res=>{
            console.log(res.data[0]);
          })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Movie
