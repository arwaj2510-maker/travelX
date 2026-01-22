import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Destinations from "./pages/Destinations";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
// import Admin from "./pages/Admin";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <div className="main-context">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking/:id" element={<Booking />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}
