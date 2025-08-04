import React, { useRef, useState, useEffect } from "react";
import "./About.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Row, Col } from "antd";
const About = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 300);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-20px 0px 0px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="MainContainer marginTop" ref={sectionRef}>
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer" style={{ margin: "auto" }}>
                            <div>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutBrand.png" alt="About Innovate Securities Brand Icon - Trusted Financial Services" />
                                </div>
                                <div>
                                    <p>About InnvoteSecurities</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center">Trusted by leaders from various industries</h2>
                        <div className="BtnContainer" style={{ margin: "auto" }}>
                            <button>Portfolio</button>
                        </div>
                    </div>
                    <div className="marginTop">
                        <div className="ImagesGridAnimation">
                            <Row gutter={[8, 8]}>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div className="FirstGrid">
                                        <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutUsMain2.jpg" alt="Financial Services Team Collaboration - Professional Investment Advisory" />
                                        </div>
                                        <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutUsMain3.jpg" alt="Business Strategy and Financial Planning - Corporate Investment Solutions" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="SecondGrid">
                                        <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutMain1.jpg" alt="Digital Financial Services Platform - Modern Investment Technology" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div className="ThirdGrid">
                                        <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutUsmain4.jpg" alt="Investment Portfolio Analysis - Financial Market Research" />
                                        </div>
                                        <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutUsMain5.jpg" alt="Corporate Financial Services - Business Investment Solutions" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="marginTop">
                        <div className="CommonHeader">
                            <h2 className="text-center">About Brand</h2>
                            <p className="text-center">Welcome to Innovate Securities Pvt. Ltd. (ISPL)</p>
                        </div>
                        <div className="CommonHeader marginTop text-center">
                            <p><b>Innovate Securities Pvt. Ltd. (ISPL)</b>, established in <b>October 1993</b>, brings over <b>30 years of expertise</b> in the <b>Indian capital markets</b>. We offer a comprehensive suite of financial services, including <b>Shares & Securities</b>, <b>Mutual Funds</b>, <b>Government & Corporate Bonds</b>, <b>Corporate Fixed Deposits (FDs)</b>, and <b>Non-Convertible Debentures (NCDs)</b>, designed to meet the diverse needs of our clients.</p>
                            <p>As corporate members of the <b>National Stock Exchange (NSE)</b>, covering the <b>Capital Market & F&O segments</b>, and the <b>Bombay Stock Exchange (BSE)</b>, alongside being a <b>Depository Participant</b> with <b>Central Depository Services Limited (CDSL)</b>, we ensure seamless access to a wide range of investment opportunities. Our diverse clientele includes <b>HNIs</b>, <b>MNIs</b>, <b>Family and Religious Trusts</b>, <b>Corporates</b>, <b>Cooperative Banks</b>, and individual investors, all of whom benefit from bespoke financial solutions tailored to their unique objectives.</p>
                            <p>Our <b>leadership team</b> is committed to delivering <b>innovative, client-centric services</b> while fostering <b>long-term relationships</b> grounded in <b>trust, professionalism, and integrity</b>. At ISPL, we are dedicated to helping clients achieve <b>sustainable financial success</b> with <b>expert guidance</b> and <b>personalized support</b>.</p>
                            {/* <p>Thank you for choosing <b>Innovate Securities Pvt. Ltd.</b>. We look forward to being a <b>trusted partner</b> in your financial journey.</p> */}
                        </div>
                    </div>
                    <div className="marginTop">
                        <div className="BackGroundImageWithContent">
                            <div className="ContentContainerAboutUs ">
                                <BiSolidQuoteLeft className="white" />

                                <h2 className="white">Our leadership delivers innovative, client-focused services for sustainable financial success.</h2>
                                <br />
                                <p className="white">Thank you for choosing <b>Innovate Securities Pvt. Ltd.</b> We look forward to being a <b>trusted partner</b> in your financial journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;