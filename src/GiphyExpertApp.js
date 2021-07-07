import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiphyExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>Giphy Expert App</h2> 
            <hr/>

            <AddCategory 
                setCategories={setCategories}
            />

            <ul>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />    
                    )
                }
            </ul>
        </div>
    )
}
