import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridImg } from './GifGridImg';
import { Loading } from './Loading';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        
        {loading && <Loading /> }

        <div className='card-grid'>
               {
                   images.map((img) => (
                        <GifGridImg 
                            key={img.id}
                            {...img}
                        />
                   ))
               }
        </div>
        </>
    )
}
