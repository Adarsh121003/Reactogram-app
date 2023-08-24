import React from 'react'

import './Signup.css'
import socialDesktop from '../images/social-desktop.PNG'
import socialMobile from '../images/social-mobile.PNG'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-iteam-center">
                    <img alt='img' className='social-desktop' style={{ height: '85%' }} src={socialDesktop} />
                    <img alt='img' className='social-mobile' src={socialMobile} />
                </div>

                <div className="col-md-5 col-sm-12" >
                    <div className="card shadow" >
                        <div className="card-body px-5">
                            <h4 className="card-titlen text-center mt-3 fw-bold">Sign Up</h4>
                            <form>
                                <input type="text" class="p-2 mt-4 mb-2 form-control input-bg" placeholder='Phone' />
                                <input type="email" class="p-2 mb-2 form-control input-bg" placeholder='Email' />
                                <input type="text" class="p-2 mb-2 form-control input-bg" placeholder='Full Name' />
                                <input type="password" className="p-2 mb-2 form-control input-bg" placeholder='Password' />
                                <div className='mt-3 d-grid'>
                                    <button className="custom-btn custom-btn-blue">Sign Up</button>
                                </div>
                                <div className='my-4'>
                                    <hr className='text-muted'></hr>
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted'></hr>
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className="custom-btn custom-btn-white">
                                        <span className='text-muted fs-6'>Already have an accout? </span>
                                        <Link to="/login" className='ms-1 text-info  fw-bold'>Login </Link>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup