import React from 'react'
import { useFechtGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFechtGifs(category);

  return (
    <>
      <h3>{ category }</h3>

      { loading && <p>Loading</p> }

        <div className="card-grid">
            {
              images.map( ( img ) => (
                <GifGridItem 
                key={ img.id }
                {...img}
                />
                ))
              }
        </div>

    </>
  )
}
