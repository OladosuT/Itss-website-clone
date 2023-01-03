import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../assets/ITSS_Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);


  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="ITSS" />
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><HashLink smoth to="/#product">Product & Solution</HashLink></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><HashLink smooth to="/#insight">Insight</HashLink></li>
          <li><Link to="/services">Careers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/references">References</Link></li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <FaBars className="icon_menu" />
          ) : (
            <FaTimes className="icon_menu" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
