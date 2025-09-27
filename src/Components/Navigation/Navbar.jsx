import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavData from "./NavData";
import { Link } from "react-router-dom";
import { Drawer, Button, Modal } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(null);

    const openContactModal = () => setIsContactOpen(true);
    const closeContactModal = () => setIsContactOpen(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

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
            window.removeEventListener('resize', checkMobile);
        };
    }, [lastScrollY]);

    const handleMobileNavClick = (path) => {
        setMobileDrawerOpen(false);
        // Scroll to top if it's the home page
        if (path === "/") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const handleMobileAccordionToggle = (itemId) => {
        setMobileAccordionOpen(mobileAccordionOpen === itemId ? null : itemId);
    };

    const renderMobileDrawer = () => (
        <Drawer
            title={null}
            placement="right"
            onClose={() => setMobileDrawerOpen(false)}
            open={mobileDrawerOpen}
            width={280}
            styles={{
                body: { padding: '20px 0' },
                header: {
                    borderBottom: '1px solid #f0f0f0',
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }
            }}
            closeIcon={
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                }}
                    onMouseEnter={(e) => e.target.style.background = '#e6e6e6'}
                    onMouseLeave={(e) => e.target.style.background = '#f5f5f5'}
                >
                    <span style={{
                        fontSize: '16px',
                        color: '#666',
                        fontWeight: 'bold'
                    }}>
                        ×
                    </span>
                </div>
            }
        >
            {/* Custom Header with Logo */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                // height: '64px',
                borderBottom: '1px solid #f0f0f0',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                zIndex: 1001
            }}>
                <div className="NavigationLogoContainer">
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/InnovateLogoAddSince.png"
                        alt="Innovate Securities Logo - Trusted Financial Services"
                        style={{ width: '160px' }}
                    />
                </div>
                <div
                    onClick={() => setMobileDrawerOpen(false)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#e6e6e6'}
                    onMouseLeave={(e) => e.target.style.background = '#f5f5f5'}
                >
                    <span style={{
                        fontSize: '16px',
                        color: '#666',
                        background: "transparent",
                        fontWeight: 'bold'
                    }}>
                        ×
                    </span>
                </div>
            </div>

            {/* Content with top margin to account for header */}
            <div style={{ marginTop: '64px' }}>
                <div className="NavLinksContainerMobile">
                    {NavData.map((item) => (
                        <div key={item.id}>
                            {item.hasDropdown ? (
                                <div>
                                    <div
                                        onClick={() => handleMobileAccordionToggle(item.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '12px 0',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: '#333',
                                            cursor: 'pointer',
                                            borderBottom: '1px solid #f0f0f0',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#060568'}
                                        onMouseLeave={(e) => e.target.style.color = '#333'}
                                    >
                                        <span>{item.name}</span>
                                        {/* <span style={{
                                            transform: mobileAccordionOpen === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                            fontSize: '14px'
                                        }}>
                                            ▼
                                        </span> */}
                                    </div>
                                    {mobileAccordionOpen === item.id && (
                                        <div style={{ paddingLeft: '20px', borderBottom: '1px solid #f0f0f0' }}>
                                            {item.sublinks.map((sublink) => (
                                                <Link
                                                    key={sublink.id}
                                                    to={sublink.path}
                                                    onClick={() => handleMobileNavClick(sublink.path)}
                                                    style={{
                                                        display: 'block',
                                                        padding: '10px 0',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        color: '#666',
                                                        textDecoration: 'none',
                                                        transition: 'color 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => e.target.style.color = '#060568'}
                                                    onMouseLeave={(e) => e.target.style.color = '#666'}
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    onClick={() => handleMobileNavClick(item.path)}
                                    style={{
                                        display: 'block',
                                        padding: '12px 0',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        color: '#333',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid #f0f0f0',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#060568'}
                                    onMouseLeave={(e) => e.target.style.color = '#333'}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="BtnContainer">
                        <button
                            type="primary"
                            onClick={openContactModal}
                            style={{ width: "100%", textAlign: "center", margin: "auto", justifyContent: "center" }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    );

    return (
        <div className={`NavigationbarContainer ${isVisible ? 'nav-visible' : 'nav-hidden'} ${hasScrolled ? 'nav-scrolled' : ''}`}>
            <div className="MainContainer">
                <div className="Container">
                    <div>
                        <div className="NavigationContainer">
                            <div className="NavigationLogoContainer" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }}>
                                <Link to="/"> <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/InnovateLogoAddSince.png" alt="Innovate Securities Logo - Trusted Financial Services" /></Link>
                            </div>

                            {/* Desktop Navigation */}
                            {!isMobile && (
                                <>
                                    <div className="NavLinksContainer">
                                        {NavData.map((item) => (
                                            <div key={item.id} className="nav-item">
                                                {item.hasDropdown ? (
                                                    <div
                                                        className="dropdown-container"
                                                        onMouseEnter={() => setActiveDropdown(item.id)}
                                                        onMouseLeave={() => setActiveDropdown(null)}
                                                    >
                                                        <Link to={item.path} className="dropdown-trigger">
                                                            {item.name}
                                                            {/* <span className="dropdown-arrow">▼</span> */}
                                                        </Link>
                                                        {activeDropdown === item.id && (
                                                            <div className="dropdown-menu">
                                                                {item.sublinks.map((sublink) => (
                                                                    <Link
                                                                        key={sublink.id}
                                                                        to={sublink.path}
                                                                        className="dropdown-item"
                                                                    >
                                                                        {sublink.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link to={item.path}>{item.name}</Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="BtnContainer">
                                            <button onClick={openContactModal}>Contact Us</button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Mobile Hamburger Menu */}
                            {isMobile && (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button
                                        type="text"
                                        icon={<MenuOutlined />}
                                        onClick={() => setMobileDrawerOpen(true)}
                                        style={{
                                            fontSize: '18px',
                                            color: '#333',
                                            border: 'none',
                                            background: 'transparent',
                                            padding: '8px'
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {renderMobileDrawer()}

            {/* Contact Modal */}
            <Modal
                open={isContactOpen}
                onCancel={closeContactModal}
                footer={null}
                centered
                destroyOnClose
            >
                <div style={{ display: 'grid', gap: 12 }}>
                    <h3 style={{ margin: 0 }}>Get in touch</h3>
                    <p style={{ margin: 0, color: '#666' }}>Choose how you'd like to contact us:</p>
                    <div style={{ display: 'grid', gap: 10, marginTop: 8 }}>
                        <a href="tel:07926474500" style={{ textDecoration: 'none' }}>
                            <button className="NewsletterButton" style={{ width: '100%' }} onClick={closeContactModal}>
                                Call Now
                            </button>
                        </a>
                        <a href="mailto:innovate95@rediffmail.com" style={{ textDecoration: 'none' }}>
                            <button className="NewsletterButton secondary" style={{ width: '100%' }} onClick={closeContactModal}>
                                Email Us
                            </button>
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar;