import React from 'react';
import './card.css'
import more from '../images/more-action.PNG'

function Cards() {
    return (
        <div>
            <div className='card shadow-sm'>
                <div className='card-body px-2'>
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className=' p-2 profile-pic' alt='profile pic' src='https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' />
                            <div className='mt-2'>
                                <p className='fs-6 fw-bold'>Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className='col-6'>

                            <img className='float-end fs-3 p-2 mt-2' alt='more action' src={more} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <img style={{ borderRadius: '15px' }} className='p-2 img-fluid ' alt='post pic' src='https://images.unsplash.com/photo-1690915611188-2d6e2fc30c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1047&q=80' />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-6 d-flex'>
                            <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i class="ps-2 fs-4 fa-regular fa-comment"></i>
                            <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>

                        </div>
                        <div className='col-6'>
                            <span className='pe-2 float-end fs-6 fw-bold '> 200 likes</span>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <span className='p-2 text-muted'>2 Hours Ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
