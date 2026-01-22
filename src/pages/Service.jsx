import { Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Service() {

    return (
        <>
            {/* //service// */}

            <section className="service">
                <div className="unique">
                    <h1>Some Features that Made us Unique</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="b3">
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-regular fa-user"></i>
                            <h3>Expert Technicians</h3>
                        </div>
                        <p> Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-solid fa-address-book"></i>
                            <h3>Professional Service</h3>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-solid fa-phone"></i>
                            <h3>Great Support</h3>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>

                <div className="b3">
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-solid fa-rocket"></i>
                            <h3>Technical Skills</h3>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-regular fa-gem"></i>
                            <h3>Highly Recomended</h3>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="expert">
                        <div className="icn">
                            <i className="fa-regular fa-message"></i>
                            <h3>Positive Reviews</h3>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </section>
        </>
    )
}