import React from "react";
import { Header } from "../header/header";
import aboutCone from "../../img/aboutcone.png"
import "../../App.css"
import CarouselCone from "../carousel/carousel";

export const About = () => {

    return (
        <div>
            <Header />

            <div className="about">

                <div  className="imagecontainer">
                    <img  className="imagecone" src={aboutCone} />
                </div>
                <div className="coneabout">
                    <h1>Serving the peoples' tastebuds since 1968.</h1>
                    <p>
                        Creamy creations has been creating the best ice creams for 53 years. <br></br>
                        Not only do we offer a variety of ice creams, cones and toppings, we also <br></br>
                        make ice cream cakes for a special occasion or if you're just satisfying<br></br>
                        a craving!
                    </p>
                </div>
            </div>
            
        </div>
    )
}
export default About;