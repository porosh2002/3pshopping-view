import React from 'react'
import {MovieCard,MovieYear,Moviename,IMDB,Rotten} from '../../Styles/Styled'
export default function MovieCardComponent({data}) {
   const {Movie_Name,Movie_Year,IMDB_Rating} = data;
    return (
        <MovieCard to='/ok' style={{background:"url('https://boyertownstatetheatre.com/wp-content/uploads/2021/03/raya.jpg')"}}>
<div className='MovieYear_IMDB'>
<MovieYear>{Movie_Year}</MovieYear>
<IMDB>{IMDB_Rating}</IMDB>
</div>
           <Moviename>{Movie_Name}</Moviename>
        </MovieCard>
    )
}
