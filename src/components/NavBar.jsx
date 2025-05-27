import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/wandall-logo.jpg";
import "../css/navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Initialize AOS animation on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Fixed Transparent Navbar */}
      <nav className="navbar" data-aos="fade-down" data-aos-delay="100">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="navbar-hamburger" onClick={() => setIsOpen(true)}>
          ☰
        </div>

        {/* Desktop & Mobile Menu */}
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={closeMenu}>
            ✖
          </div>
          <NavLink to="/" onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink to="/internet-plans" onClick={closeMenu}>
            INTERNET PLANS
          </NavLink>
          <NavLink to="/cyber-security" onClick={closeMenu}>
            CYBERSECURITY
          </NavLink>
          <NavLink to="/green-power" onClick={closeMenu}>
            GREEN POWER
          </NavLink>
          <NavLink to="/why-us" onClick={closeMenu}>
            WHY CHOOSE US
          </NavLink>
          <NavLink to="/blog" onClick={closeMenu}>
            BLOG
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
