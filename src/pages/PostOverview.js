import React from 'react'
import Cards from '../components/Cards'

function PostOverview() {
    return (
        <div className='container mt-md-5 mt-3'>
            <div className='row'>
                <div className='col-md-4 mb-2'>
                    <Cards />
                </div>
                <div className='col-md-4 mb-2'>
                    <Cards />
                </div>
                <div className='col-md-4 mb-2'>
                    <Cards />
                </div>
            </div>
        </div>

    )
}

export default PostOverview;