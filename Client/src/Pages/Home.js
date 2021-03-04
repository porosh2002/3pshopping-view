import React from 'react'
import Title from '../Components/Title/Title'
export default function Home() {
    return (
        <div> 
        
           <Title Text='Latest' filter='latest'/>
           <Title Text='Recommended' filter='recommended'/>
           <Title Text='Most Popular' filter='popular'/>
           
        </div>
    )
}
