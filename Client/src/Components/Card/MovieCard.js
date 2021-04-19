import React from 'react'
import {MovieCard,MovieYear,Moviename} from '../../Styles/Styled'
export default function MovieCardComponent({data}) {
   const {Movie_Name,Movie_Year,IMDB_Rating,Tomatos_Rating,Metacritic_Rating} = data;
    return (
        <MovieCard to='/ok' style={{background:"url('https://boyertownstatetheatre.com/wp-content/uploads/2021/03/raya.jpg')"}}>
           <MovieYear>{Movie_Year}</MovieYear>
           <Moviename>{Movie_Name}</Moviename>
           <div>
               <div>
                   
               </div>
           </div>
        </MovieCard>
    )
}
