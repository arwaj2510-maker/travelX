import { Link } from "react-router-dom";
import logo from "../assets/images/logoX.png";

export default function Header() {
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
                    <button>Book Now</button>
                </div>

            </div>
        </>
    );
}
