import React, { useState } from 'react'
import './Profile.css'

import Modal from 'react-bootstrap/Modal';
import horizontalMoreAction from '../images/horizontalMoreAction.PNG'


const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ===============
    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);
    // =========================
    return (
        <div className='container shadow mt-3 pt-4'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column'>
                    <img className=' profile-img p-2 img-fluid ' alt='post pic' src='https://images.unsplash.com/photo-1690915611188-2d6e2fc30c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1047&q=80' />
                    <p className=' ms-2 fs-6 fw-bold'>adarsh_tiwari</p>
                    <p className=' ms-2 fs-6 '>Adarsh_Tiwari</p>
                    <p className=' ms-2 fs-6 '>Mern Stack Developer @adarsh | Follow @adarsh</p>
                    <p className=' ms-2 fs-6 '>My Portfolio <a href='#'>www.web.com </a></p>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between mt-3 mb-3' >
                    <div className='d-flex justify-content-equal mx-auto'>
                        <div className='count-section pe-4 pe-md-5 text-center fw-bold' >
                            <h4>10</h4>
                            <p> Posts</p>
                        </div>

                        <div className='count-section px-4 px-md-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Followers</p>
                        </div>

                        <div className='ps-md-5 ps-4 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Folowing</p>
                        </div>

                    </div>
                    <div className='mx-auto  mt-md-0 mt-4' >
                        <button className="custom-btn custom-btn-white me-md-3 ">
                            <span className=' fs-6'>Edit Profile</span>
                        </button>
                        <button className="custom-btn custom-btn-white  " onClick={handlePostShow}>
                            <span className=' fs-6'>Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Cards For Post */}
            <div className='row my-3'>
                <div className='col-12'>
                    <hr />
                </div>

            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" onClick={handleShow} >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="img" />
                    </div>
                </div>
            </div>
            {/* =================Pop Up ================= */}


            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
            >
                <Modal.Header closeButton>


                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        {/* ======First Section Start ========= */}
                        <div className='col-md-6'>
                            <div>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="d-block w-100" alt="flower image" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt="flower image" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1558281033-19cead6981dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="flower image" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* =======First Section Ends============ */}
                        {/* ========Second Section Starts========= */}
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-6 d-flex'>
                                    <img className=' p-2 profile-pic' alt='profile pic' src='https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' />
                                    <div className='mt-2 ms-2'>
                                        <p className='fs-6 fw-bold'>Title</p>
                                        <p className='location'>Description</p>
                                    </div>
                                    <div className="dropdown ms-5">
                                        <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                                            <img alt="more action" src={horizontalMoreAction} />
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square px-2"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash-can px-2"></i>Delete </a></li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <span className='p-2 text-muted'>2 Hours Ago</span>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 ms-2'>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-6 d-flex'>
                                    <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                                    <i className="ps-3 fs-4 fa-regular fa-comment"></i>
                                    <i className="ps-3 fs-4 fa-solid fa-location-arrow"></i>
                                </div>

                                <div className='col-12 mt-3 ms-2'>
                                    <span className='fs-6 fw-bold'>200 likes</span>
                                </div>
                            </div>

                        </div>
                        {/* ==========Second Section ends========== */}
                    </div>
                </Modal.Body>
            </Modal>
            {/* =========Pop Up ============== */}


            {/* ========Upload Post Design Start ================= */}
            <Modal
                show={showPost}
                onHide={handlePostClose}
                size='lg'
                centered
            >
                <Modal.Header closeButton>

                    <span className='fw-bold fs-5'>Upload Post</span>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        {/* =======First Part Design======= */}
                        <div className='col-md-6 col-sm-12 mb-3'>
                            <div className='upload-box'>
                                <div className='dropZoneContainer'>
                                    <input type='file' id='drop_zone' className='FileUpload' accept='.jpg,.png,.gif' onChange="handleFileSelect(this)" />
                                    <div className='dropZoneOverlay'><i class="fa-solid fa-cloud-arrow-up fs-1"></i> <br /> Upload Photo from computer</div>

                                </div>

                            </div>
                        </div>
                        {/* ======End Of First Part Design ======== */}

                        {/* ==========Second Part Design================ */}
                        <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
                            <div className='row'>
                                <div className='col-sm-12 mb-3 '>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Add Caption</label>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                                        <label for="floatingInput"><i className="fa-solid fa-location-dot px-2"></i>Add Location</label>
                                    </div>
                                </div>
                                {/* ========================str====== */}
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 mb-3'>
                                    <button className="custom-btn custom-btn-pink float-end  " >
                                        <span className=' fs-6 fw-600'>Post</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* ===========End of Second Part Design============ */}
                    </div>
                </Modal.Body>
            </Modal>
            {/* =========Upload Post Design Ends==================== */}

        </div >
    )
}

export default Profile;