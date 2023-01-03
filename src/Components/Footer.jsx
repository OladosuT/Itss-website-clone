import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Footer.css";
import logo from "../assets/Footer/ITSS_Logo_vector.png";
import linkedin from "../assets/Footer/Linkedin _Logo.png";
import instagram from "../assets/Footer/Instagram_Logo.png";
import twitter from "../assets/Footer/Twitter_logo.png";


const Footer = () => {
  return (
    <div className='footer'>
      <section className='one'>
        <div className="footer_info">
        <img src={logo} alt="ITSS" />
            <p>
            Information Technologies Solutions & Services (ITSS) develops and delivers banking technology solutions and services to banks and financial institutions all around the world.
            </p>
            <div className='footer_form'>
              <input type="text" placeholder="Enter Your Email ID" />
              <button>Subscribe</button>
            </div>
        </div>
        <div className="ITSS_link">
            <h4>ITSS</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/references">References</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="company">
            <h4>Company</h4>
            <ul>
              <li>Press Release</li>
            </ul>
        </div>
        <div className="legal">
            <h4>Legal</h4>
            <ul>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className="footer_socials">
            <h4>GET IN TOUCH WITH US</h4>
            <div className="social_img">
              <a href=""><img src={linkedin} alt="linkedin" /></a>
              <a href=""><img src={instagram} alt="instagram" /></a>
              <a href=""><img src={twitter} alt="twitter" /></a>
            </div>
        </div>
      </section>
      <hr />
      <section className='two'>
        <div className="copyright">
          <p>Copyright &copy; 2023 ITSS. All Rights Reserved</p>
        </div>
        <div className="policy">
            <p>GDPR-Compliant Privacy Policy</p>
        </div>
      </section>
    </div>
  )
}

export default Footer