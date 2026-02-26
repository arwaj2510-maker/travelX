
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import aboutimg from "../assets/images/aboutimg.jpg";
import why from "../assets/images/why.jpg"


export default function About() {

    return (
        <>
            {/* //about// */}

            <div className="builder">
                <h1>Why Choose Us Your Fitness Builder</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className="abt">

                <div className="txt">
                    <h2>We Realize that
                        there are reduced
                        Wastege Stand </h2>

                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.</p>

                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.</p>

                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.</p>
                </div>
                <div className="img">
                    <img src={aboutimg} alt="" />
                </div>
            </div>

            <div className="latest">
                <div className="project">
                    <h1>Latest Project on the go</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>
                <div className="why">
                    <img src={why} alt="" />
                </div>
                <div className="vector">
                    <h2>Vector Illustration</h2>
                    <p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have  allowed humanity to create slimmer, more portable technology.</p>
                </div>
            </div>
        </>
    )
}