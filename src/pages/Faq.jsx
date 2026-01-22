import { Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Faq() {

    return (
        <>


            {/* //FAQ// */}


            <div className="ques">
                <h1>Frequently Asked Questions</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className="faq">
                <div className="count">
                    <div className="c1">
                        <h1>5962</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="c1">
                        <h1>2394</h1>
                        <p>New Projects</p>
                    </div>
                    <div className="c1">
                        <h1>1439</h1>
                        <p>Tickets Submitted</p>
                    </div>
                    <div className="c1">
                        <h1>933</h1>
                        <p>Cup of Coffee</p>
                    </div>
                </div>
                <div className="text">
                    <div className="a1">
                        <h2>Are your Templates responsive?</h2>
                        <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
                    </div>
                    <div className="a1">
                        <h2>Does it have all the plugin as mentioned?</h2>
                        <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
                    </div>
                    <div className="a1">
                        <h2>Can i use the these theme for my client?</h2>
                        <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
                    </div>
                </div>
            </div>
        </>
    )
}