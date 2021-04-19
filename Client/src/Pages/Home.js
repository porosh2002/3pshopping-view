import React from 'react'
import MovieCardList from '../Components/Card/MovieCardList'
import Title from '../Components/Title/Title'
export default function Home() {
    return (
        <div> 
        
           <Title Text='Latest' filter='latest'/>
           <div className='MovieCardWrap'>
           <MovieCardList name='latest' />
           </div>
           <Title Text='Recommended' filter='recommended'/>
           <div className='MovieCardWrap'>
           <MovieCardList name='latest' />
           </div>
           <Title Text='Most Popular' filter='popular'/>
           <div className='MovieCardWrap'>
           <MovieCardList name='latest' />
           </div>
        </div>
    )
}
