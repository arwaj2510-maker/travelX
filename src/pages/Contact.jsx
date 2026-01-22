
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function Contact() {

    return (
        <>
            {/* //contact// */}

            <div className="cnt">
                <h1>If you need, Just drop us a line</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <form action="" className="contact">
                <div className="cnt1">
                    {/* <input type="text" name="Name" placeholder="Enter Your Name" />
                    <input type="" name="Address" placeholder="" />
                    <input type="text" name="" placeholder="Enter Your Subject" /> */}

                    {/*  */}

                    <TextField name="name" label="Name" placeholder="Enter Your Name" />
                    <TextField name="Email" label="Email" className="inp" placeholder="Enter Your Email" />
                    <TextField name="" label="Subject" placeholder="Enter Your Subject" />
                </div>
                <div className="cnt2">
                    <textarea className="msg-box" placeholder="Type your message..." label="Message"></textarea>
                    <button id="cnt-btn">Send Message   <i className="fa-solid fa-arrow-down fa-rotate-270"></i></button>

                </div>
            </form>
        </>
    )
}