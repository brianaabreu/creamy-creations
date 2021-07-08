import React from 'react';
import "./../../App.css";
import LogoTwo from '../../img/logoTwoO.png'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="Header">
            <div>
                <Link to="/">

                    <img className="Logo" src={LogoTwo} alt="logo" />
                </Link>
                </div>
                <div className="navBar">
                    <nav>
                        <Link to="/menu">
                            <a style={{color: '#FFB0B0'}} href="#">Menu</a>
                        </Link>
                        <Link to="/order">
                            <a style={{color: '#FFB0B0'}}  href="#">Order Now!</a>
                        </Link>
                        <Link to="/about">
                            <a style={{color: '#FFB0B0'}}  href="#">About</a>
                        </Link>
                        <Link to="/contact">
                            <a style={{color: '#FFB0B0'}}  href="#">Contact</a>
                        </Link>
                    </nav>
                </div>
            </div>
    )
}
export default Header;