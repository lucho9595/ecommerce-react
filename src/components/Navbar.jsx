import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shoppingcart.png';
import style from '../style/Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo} className="navbar-brand" id={style.logo} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="d-flex me-2">
                        <Link to="/signin" className={style.btn1}>
                            Signin
                        </Link>
                        <Link to="/login" className={style.btn2}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};