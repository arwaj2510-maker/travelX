import { Link } from "react-router-dom";
import logo from "../assets/images/logoX.png";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";


export default function Header() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        city: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/bookings", formData);
            alert("Booking Saved ✅");
            setShowForm(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="c1">
                    <img src={logo} alt="" width={100} height={100} />
                </div>

                <div className="c2">
                    <Link to="/">HOME</Link>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Service">SERVICE</Link>
                    <Link to="/Gallery">GALLERY</Link>
                    <Link to="/Faq">FAQ</Link>
                    <Link to="/Contact">CONTACT</Link>

                </div>

                <div className="c3">
                    {/* Book Now Button */}
                    <button onClick={() => setShowForm(true)}>
                        Book Now
                    </button>

                    {/* Booking Form */}
                    {showForm && (
                        <form id="book-form" onSubmit={handleSubmit}>
                            <div className="hd">
                                <span
                                    className="close"
                                    onClick={() => setShowForm(false)}
                                >
                                    &times;
                                </span>

                                <h1>Make Your Reservation</h1>
                            </div>
                            <TextField className="fm"
                                name="name"
                                label="Name"
                                placeholder="Enter Your Name"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <TextField
                                name="number"
                                label="Phone"
                                placeholder="Enter Your Number"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <TextField
                                name="email"
                                label="Email"
                                placeholder="Enter Your Email"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <TextField
                                name="city"
                                label="City"
                                placeholder="Enter Your City"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <button className="book-btn">SUBMIT</button>
                        </form>
                    )}
                </div>

            </div>
        </>
    );
}
