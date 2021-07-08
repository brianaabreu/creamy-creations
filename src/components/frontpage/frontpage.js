import React from 'react';
import "./../../App.css";
import ConePhoto from '../../img/conePhoto.png'
import { Link } from 'react-router-dom';
import { Header } from "../header/header";
import Footer from '../footer/footer';

export const Frontpage = () => {

    return (
        <div>
            <Header />

            <div className="topPage">
                <div>
                    <img className="conePhoto" src={ConePhoto} />
                </div>
                <div>
                    <p className="slogan">
                        Satisfy your taste<br></br> buds with the best.
                    </p>
                    <Link style={{textDecoration:'none'}} to="/order">

                    <a className="orderButton" href="">Order Now!</a>
                    </Link>
                </div>
            </div>

            <Footer/>

        </div>

  
    )
}

export default Frontpage;