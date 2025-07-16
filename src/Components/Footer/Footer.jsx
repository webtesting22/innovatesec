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
            icon: <FaFacebook />
        },
        {
            name: "Instagram",
            icon: <AiFillInstagram />
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />
        },
        {
            name: "Twitter",
            icon: <FaTwitter />
        },
    ]
    return (
        <div className="MainContainer FooterMainContainer">
            <div className="Container ">
                <div className="paddingSide marginTop marginBottom">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="CompanyBrandingContainer paddingRight">
                                <div>
                                    <h3>Innovate Securities Pvt. Ltd.</h3>
                                    <p>
                                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                                    </p>
                                </div>
                                <div className="SocialMediaContainer marginTop">
                                    <ul>
                                        {SocialMediaData.map((item, index) => (
                                            <li key={index}>
                                                {item.icon} {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
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
                    </Row>
                </div>
                {/* <div className="FooterBackImage">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/2371.jpg" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Footer;