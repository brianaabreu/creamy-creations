import React from "react";
import { Link } from 'react-router-dom';
import { Header } from "../header/header";
import Chips from '../../img/chips.jpg'
import Chocoscoop from '../../img/chocoscoop.jpg'
import Waffle from '../../img/waffle.png'
import Cake from '../../img/cake.png'
import chococone from '../../img/chococone.png';
import bowl from '../../img/bowl.jpg'
import Vanilla from '../../img/vanilla.png';
import Strawberry from '../../img/strawberry.png';
import Coffee from '../../img/coffee.jpg'
import Pistachio from '../../img/pistachio.jpg'
import cookiedough from '../../img/cookiedough.png';
import bananas from '../../img/bananas.jpg'
import syrup from '../../img/syrup.png';
import Oreos from '../../img/oreos.jpg';
import Strawberries from '../../img/strawberries.png'
import Crackers from '../../img/graham.jpg';
import Brownies from "../../img/brownies.png"
import Footer from '../footer/footer';


export const Menu = () => {

    return (
        <div>
            <Header />

            <div className="menuContainer">
                

                <div classname="Cones">
                    <h1>Cones</h1>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        placeItems: 'flex-end',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}>

                        <div className="Waffle">
                            <img src={Waffle} style={{ maxWidth: '100px'}}></img>
                            <h4 style={{ marginBottom: '60' }}>Waffle</h4>
                        </div>
                    
                        <div className="Cake" >
                            <img src={Cake} style={{maxWidth: '100px'}}></img>
                            <h4 style={{marginBottom: '60'}}>Sugar</h4>
                        </div>

                        <div className="Chococone">
                            <img src={chococone} style={{maxWidth: '90px'}}></img>
                            <h4 style={{marginBottom: '60'}}>Chocolate-Dipped</h4>
                        </div>

                        <div className="bowl" >
                            <img src={bowl} style={{maxWidth: '180px'}}></img>
                            <h4 style={{marginBottom: '60'}}>Bowl</h4>
                        </div>
                        
                    </div>

                </div>
                <div classname="Flavors" >
                    <h1>Flavors</h1>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        placeItems: 'flex-end',
                        flexWrap:'wrap',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}>

                    <div className="Chocoscoop">
                        <img src={Chocoscoop} style={{maxWidth: '200px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Chocolate</h4>
                    </div>

                    <div className="Vanilla">
                        <img src={Vanilla} style={{maxWidth: '190px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Vanilla</h4>
                    </div>
                    
                    <div className="Strawberry">
                        <img src={Strawberry} style={{maxWidth: '200px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Strawberry</h4>
                    </div>

                    <div className="Coffee">
                        <img src={Coffee} style={{maxWidth: '190px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Coffee</h4>
                    </div>
                    
                    <div className="Pistachio">
                        <img src={Pistachio} style={{maxWidth: '170px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Pistachio</h4>
                    </div>
                         
                    
                    <div className="CookieDough">
                        <img src={cookiedough} style={{maxWidth: '190px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Cookie Dough</h4>
                    </div>

                    </div>
                </div>
                <div classname="Toppings" style={{marginBottom: '40px',  marginBottom: '20px'}}>
                    <h1>Toppings</h1>

                <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        placeItems: 'flex-end',
                        flexWrap:'wrap',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}>

                    <div className="Chips" >
                        <img src={Chips} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Chocolate Chips</h4>
                    </div>
                        
                    <div className="Bananas">
                        <img src={bananas} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Sliced Bananas</h4>
                    </div>
                    
                    <div className="Syrup">
                        <img src={syrup} style={{maxWidth: '60px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Chocolate Syrup</h4>
                    </div>
                        
                    <div className="Oreos">
                        <img src={Oreos} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Oreos</h4>
                    </div>
    
                    <div className="Strawberries">
                        <img src={Strawberries} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Sliced Strawberries</h4>
                    </div>
                        
                    <div className="Crackers">
                        <img src={Crackers} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Graham Crackers</h4>
                    </div>
                        
                    <div className="Brownies">
                        <img src={Brownies} style={{maxWidth: '140px'}}></img>
                        <h4 style={{marginBottom: '60'}}>Brownie Bites</h4>
                    </div>
                        
                    </div>
                </div>

                <Link style={{textDecoration:'none'}} to="/order">
                    <a className="orderButtonMenu" href="">Order Now!</a>
                </Link>

            </div>

            <Footer />
            
        </div>
    )
}
export default Menu;