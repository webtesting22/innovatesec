import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import NavData from "../Navigation/NavData";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {

    const SocialMediaData = [
        {
            name: "Facebook",
            icon: <FaFacebook />,
            link: "https://www.facebook.com/profile.php?id=61577903109138"
        },
        {
            name: "Instagram",
            icon: <AiFillInstagram />,
            link: "https://www.instagram.com/innovatesecurities/"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/company/innovate-securities"
        },
    ]
    return (
        <div className="MainContainer FooterMainContainer">
            <div className="Container ">
                <div className="paddingSide marginTop marginBottom marginAuto">
                    <Row gutter={[16, 16]} className="w-100">
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className="CompanyBrandingContainer paddingRight">
                                <div>
                                    <h3>Innovate Securities Pvt. Ltd.</h3>
                                    <p>
                                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                                    </p>
                                </div>

                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className="SocialLinkstAndAdress">
                                <div>
                                    <h3>Quick Links</h3>
                                    <ul>
                                        {NavData.map((item, index) => (
                                            <li key={index}><Link to={item.path}>{item.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className="SocialMediaContainer">
                                <ul>
                                    {SocialMediaData.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.icon} {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <div className="CopyRightContainer">
                        <p>
                            <strong>© 2025 Innovate Securities Pvt. Ltd. All rights reserved.</strong>
                        </p>
                        <p>
                            Designed & Developed by{" "}
                            <a style={{ color: "black" }}
                                href="https://www.outleadsolutions.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>OutLead Solutions</b>
                            </a>
                        </p>
                    </div>

                </div>
                {/* <div className="FooterBackImage">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/2371.jpg" alt="Innovate Securities Footer Background - Financial Services Excellence" />
                </div> */}
            </div>
        </div>
    );
};

export default Footer;