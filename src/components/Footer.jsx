

function Footer() {
    return (
        <footer className="footer">
            <div className="about-us">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                <span>Copyright ©2026 All rights reserved | This template is made with by Colorlib</span>
            </div>
            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>Stay update with our latest</p>
                <input type="email" placeholder="Enter Email" />
                <i className="fa-solid fa-arrow-down fa-rotate-270"></i>
            </div>
            <div className="follow">
                <h2>Follow Us</h2>
                <p>Let us be social</p>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-solid fa-earth-africa"></i>
                <i className="fa-brands fa-angellist"></i>

            </div>
        </footer>
    );
}

export default Footer;
