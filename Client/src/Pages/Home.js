import React from 'react'
import MovieCardList from '../Components/Card/MovieCardList'
import Title from '../Components/Title/Title'
export default function Home() {
    return (
        <div> 
        
           <Title Text='Latest' filter='latest'/>
           <MovieCardList name='latest' />
           <Title Text='Recommended' filter='recommended'/>
           <Title Text='Most Popular' filter='popular'/>
        </div>
    )
}
