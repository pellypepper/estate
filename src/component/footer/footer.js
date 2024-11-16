import React from "react";
import './footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer>
            <div className="footer-icon-wrapper">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={40} color="#4267B2" /> {/* Facebook Icon */}
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="#E1306C" /> {/* Instagram Icon */}
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color="#0077B5" /> {/* LinkedIn Icon */}
      </a>
            </div>

            <div className="footer-grid">
                <div className="footer-grid-1">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Our Team</li>
                        <li>Our Blog</li>
                    </ul>
                </div>

                <div className="footer-grid-1">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-grid-1">
                    <h3>Quicklinks</h3>
                    <ul>
                        <li>Home</li>
                        <li>Listing</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-grid-4">
                    <h3>Subscribe</h3>
                    <form >
                        <input type="text" />
                        <button>Subscribe</button>
                    </form>
                </div>

             

            </div>
        </footer>
    )

}