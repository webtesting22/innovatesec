import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavData from "./NavData";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled past 100px for shadow effect
            if (currentScrollY > 100) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past 100px
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={`NavigationbarContainer ${isVisible ? 'nav-visible' : 'nav-hidden'} ${hasScrolled ? 'nav-scrolled' : ''}`}>
            <div className="MainContainer">
                <div className="Container">
                    <div className="paddingSide">
                        <div className="NavigationContainer">
                            <div className="NavigationLogoContainer" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }}>
                                <Link to="/"> <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/innovateLogo.png" alt="Innovate Securities Logo - Trusted Financial Services" /></Link>
                            </div>
                            <div className="NavLinksContainer">
                                {NavData.map((item) => (
                                    <div key={item.id}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="BtnContainer">
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;