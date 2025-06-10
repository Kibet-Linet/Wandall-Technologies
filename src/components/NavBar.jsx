import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/wandall-logo.jpg";
import "../css/navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to top & close mobile menu
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-delay="100">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="navbar-hamburger" onClick={() => setIsOpen(true)}>
        ☰
      </div>

      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          ✖
        </div>
        <NavLink to="/" onClick={handleLinkClick} className="nav-link">
          HOME
        </NavLink>
        <NavLink to="/internet-plans" onClick={handleLinkClick} className="nav-link">
          INTERNET PLANS
        </NavLink>
        <NavLink to="/cyber-security" onClick={handleLinkClick} className="nav-link">
          CYBERSECURITY
        </NavLink>
        <NavLink to="/green-power" onClick={handleLinkClick} className="nav-link">
          GREEN POWER
        </NavLink>
        <NavLink to="/why-us" onClick={handleLinkClick} className="nav-link">
          WHY CHOOSE US
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
