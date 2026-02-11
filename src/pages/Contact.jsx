
import { useState } from "react";
import TextField from "@mui/material/TextField";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // input change handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        alert("Form submit ho gaya ✅");
    };

    return (
        <>

            <div className="cnt">
                <h1>If you need, Just drop us a line</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <form className="contact" onSubmit={handleSubmit}>
                <div className="cnt1">
                    <TextField
                        name="name"
                        label="Name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <TextField
                        name="email"
                        label="Email"
                        className="em"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <TextField
                        name="subject"
                        label="Subject"
                        placeholder="Enter Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="cnt2">
                    <textarea
                        className="msg-box"
                        name="message"
                        placeholder="Type Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button id="cnt-btn" type="submit">
                        Send Message <i className="fa-solid fa-arrow-down fa-rotate-270"></i>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Contact;



