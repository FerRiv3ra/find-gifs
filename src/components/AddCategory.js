import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length < 2) return;

        setCategories((category) => [inputValue, ...category]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Categoría'
                value={inputValue}
                type='text' 
                className='form-control mb-4'
                onChange={handleInputChange}
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}