import { Link } from "react-router-dom";
import logo from "../assets/images/logoX.png";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
// import axios from "axios";


function Header() {
    const [showForm, setShowForm] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="logo" width={88} />
                </div>

                {/* Links */}
                <div
                    className={`nav-links ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <Link to="/">HOME</Link>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Service">SERVICE</Link>
                    <Link to="/Gallery">GALLERY</Link>
                    <Link to="/Faq">FAQ</Link>
                    <Link to="/Contact">CONTACT</Link>
                </div>

                {/* Right Section */}
                <button className="book-btn" onClick={() => setShowForm(true)}>
                    Book Now
                </button>

                {/* Hamburger */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </nav>

            {/* Booking Form Modal */}
            {showForm && (
                <div className="form-overlay">
                    <form className="booking-form">
                        <span className="close" onClick={() => setShowForm(false)}>
                            &times;
                        </span>
                        <h2>Make Your Reservation</h2>

                        <TextField label="Name" fullWidth margin="normal" />
                        <TextField label="Phone" fullWidth margin="normal" />
                        <TextField label="Email" fullWidth margin="normal" />
                        <TextField label="City" fullWidth margin="normal" />

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
export default Header;