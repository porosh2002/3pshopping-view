import React from 'react' 
import ImageCard from './ImageCard'

export default function ImageCardList({data}) {
    return (
        <div>
        {data.map((data,i)=>{
            return <ImageCard key={i} data={data} />
        })}
    </div>
    )
}
