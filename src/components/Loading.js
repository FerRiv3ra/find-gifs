import React from 'react';

export const Loading = () => {
    return (
        <div className='row justify-content-center align-items-center'>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}