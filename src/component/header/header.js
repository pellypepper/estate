import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {  NavLink } from "react-router-dom";
import "./header.css";

export const ROUTES = {
    
    Home: "/",
    Listing: "/listing",
    Rent: "/rent"
  
  };

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);  // Menu is open by default on large screens
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);  // Detect if screen is mobile
    const menuRef = useRef(null);

    // Update isMobile state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);  // Update isMobile based on screen width
        };

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen, isMobile]);

    // Reset the menu state based on screen size
    useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false);  // Close the menu for mobile screens
        } else {
            setIsMenuOpen(true);   // Keep the menu open for larger screens
        }
    }, [isMobile]);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleSubClose = () => {
        setDropdownOpen(false);
    };

    // Toggle the menu for mobile view
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleClose = () => {
        setIsMenuOpen(false);
    };

    // Detect click outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="logo-container">
                <h1>DEE<span>HOMES</span></h1>
            </div>

            {/* Display the menu section only on screens smaller than 768px or if the menu is open */}
            {(isMenuOpen || !isMobile) && (
                <section ref={menuRef}>
                    <nav>
                        <ul>
                            <div className="close-icon">
                                <CloseIcon onClick={toggleClose} />
                            </div>

                            <NavLink to={ROUTES.Home} className="li active"><li className="li" ><p>Home</p></li></NavLink>
                            <li className="submenu-container">
    <p onClick={handleDropdownToggle} className="li active">Listing</p>
    {dropdownOpen && (
        <div className="submenu-wrapper">
            <ul>
            <div className="close-icon close-icon-1">
                                <CloseIcon onClick={toggleSubClose} />
                            </div>
                            <NavLink className="submenu" to={ROUTES.Listing}>  <li>Property For Sale</li></NavLink>
                            <NavLink className="submenu"  to={ROUTES.Rent}> <li>Property For Rent</li></NavLink>
                            <NavLink className="submenu"  to={ROUTES.Rent}>   <li>All Available Properties</li></NavLink>
            </ul>
        </div>
    )}
</li>

                            <li><p className="li active" href="#">Contact</p></li>
                        </ul>
                    </nav>

                    <div className="home-icon">
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+1-234-567-890</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Property</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Menu icon for mobile screens */}
            <div className="menu-icon">
                <MenuIcon className="icon" onClick={toggleMenu} />
            </div>
        </header>
    );
}
