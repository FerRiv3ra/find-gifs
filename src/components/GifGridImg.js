import React from 'react'

export const GifGridImg = ({title, url}) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img 
                src={url} 
                className="card-img-top" 
                alt={title}
            />
            <div className="card-body">
                <p className="card-text text-center p-2">{title}</p>
            </div>
        </div>
    )
}
