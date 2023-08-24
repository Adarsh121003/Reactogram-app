import React from 'react'
import './Navbar.css';
import logo from '../images/logo.PNG'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar bg-light shadow-sm ">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-5" to="/">
                    <img alt='logo' src={logo} height="45px" />
                </NavLink>
                <form className="d-flex me-md-5" role="search">
                    <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                    <a className="nav-link text-dark fs-5 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house"></i></a>
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart"></i></a>
                    {/* ==============Profile DropDown Starts========= */}
                    <div className="dropdown ms-5">
                        <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                            <img className='navprofile-pic' alt='profile pic' src='https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' />
                        </a>

                        <ul className="dropdown-menu">
                            <li><NavLink className="nav-link mt-0" to="/myprofile">My Profile</NavLink> </li>

                            <li><a className="dropdown-item" href="#">LogOut</a></li>

                        </ul>
                    </div>

                </form>
            </div>
        </nav>
    )
}

export default Navbar