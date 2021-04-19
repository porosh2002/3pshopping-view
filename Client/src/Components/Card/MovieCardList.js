import React from 'react'
import {URL} from '../../serverUrl'
import axios from 'axios'
import MovieCard from './MovieCard'
export default function MovieCardList({name}) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${URL}api/movie/${name}`).then(res=>{
            setData(res.data)
        })
      }, [])
    return (
        <div>
            {data.map((i)=>{
              return  <MovieCard data={i} key={i._id} />
            })}
        </div>
    )
}
