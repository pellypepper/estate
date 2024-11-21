import React from "react";
import './footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/route";

  
export default function Footer() {
    return (
      <footer>
        <div className="footer-grid">
          <div className="footer-grid-1 grid">
            <h3>Quicklinks</h3>
            <ul>
              <li>
                <NavLink className="menu" to={ROUTES.Listing}>Property For Sale</NavLink>
              </li>
              <li>
                <NavLink className="menu" to={ROUTES.Rent}>Property For Rent</NavLink>
              </li>
            </ul>
          </div>
  
          <div className="footer-grid-1">
            <h3>Company</h3>
            <ul>
              <li>
                <NavLink className="menu" to={ROUTES.About}>About Us</NavLink>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          <div className="footer-grid-4">
            <div className="footer-icon-wrapper">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} color="#4267B2" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} color="#E1306C" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#0077B5" />
              </a>
            </div>
            <div className="copyright">
              <p>&copy; 2024 DEE HOMES. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }