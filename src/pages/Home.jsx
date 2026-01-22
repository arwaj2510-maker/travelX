import { Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import greece from "../assets/images/greece.jpg";


export default function Home() {
    return (
        <>
            <div className="main">
                <div className="home">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="t1">
                            <p>Discover the Colorful World</p>
                            <h1>New Adventure</h1>
                        </div>
                        <div className="t2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
                                or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        </div>


                        <Button variant="contained" href="/destinations" className="btn">
                            Explore Destinations
                        </Button>
                    </motion.div>
                </div>
            </div>
            <div className="e-hdg">
                <h2>Easy and fast</h2>
            </div>
            <div className="easy">
                <div className="nxt-trip">
                    <h1>Book Your Next Trip in 3 Easy Steps</h1>
                    <div className="e1">
                        <div>
                            <i className="fa-solid fa-earth-africa"></i>
                        </div>
                        <div>
                            <h3>Choose Destination</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem.</p>
                        </div>
                    </div>
                    <div className="e1">
                        <div>
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div>
                            <h3>Make Payment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem.</p>
                        </div>
                    </div>
                    <div className="e1">
                        <div>
                            <i className="fa-solid fa-jet-fighter-up"></i>
                        </div>
                        <div>
                            <h3>Reach Airport On Selected Date</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem.</p>
                        </div>
                    </div>
                </div>
                <div className="greece">
                    <img src={greece} alt="" />
                    <h2>Trip To Greece</h2>
                    <p>7-24 Feb| by Maxx</p>
                    <div className="t-greece">
                        <div className="pg">
                            <div>
                                <i className="fa-solid fa-people-group"></i>
                            </div>
                            <div>
                                <p>24 People Going</p>
                            </div>
                        </div>
                        <div className="icn-h">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* //service */}

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
                <div>
                    <Link to="/Service">
                        <button className="s-btn">Services <i className="fa-solid fa-arrow-down fa-rotate-270"></i></button>
                    </Link>
                </div>
            </section>

        </>
    );
}
