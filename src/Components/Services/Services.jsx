import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import { Row, Col } from "antd";
import ServicesData from "./ServicesData";
// import { HiOutlineArrowUpRight } from "react-icons/hi";

const Services = () => {
    const [selectedService, setSelectedService] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentService = ServicesData[selectedService];


    const handleServiceClick = (index) => {
        if (index !== selectedService && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedService(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add 1 second delay before starting the animation
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 500);
                }
            },
            {
                threshold: 0.1, // Small threshold to detect early
                rootMargin: '-30px 0px 0px 0px' // Trigger when user enters section by 30px
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

    return (
        <div className="MainContainer marginTop" ref={sectionRef}>
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer" style={{ margin: "auto" }}>
                            <div>
                                <div className="flexVertically" >
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Financial Services Icon - Investment Solutions" />
                                </div>
                                <div>
                                    <p>OUR SERVICES</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center">Get The Professional Financial Services You Need To Grow And Succeed</h2>
                    </div>
                    <div className="marginTop ServicesBannerImage">
                        <div className={` LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/service.jpg" alt="" className="w-100" />
                        </div>
                    </div>
                    <Row gutter={[40, 40]} className="ServicesRow">
                        <Col lg={12} xs={24} >
                            <div className="ServiceCardContainer" >
                                <div className={`ServiceCard ${isAnimating ? 'animating' : ''}`}>
                                    <div className={` ServiceCardImage LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                        <img
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CommonService.jpg"
                                            alt={`${currentService.title} - Innovate Securities Financial Services`}
                                        />
                                    </div>
                                    <div className="ServiceCardContent">
                                        <h2>{currentService.title}</h2>
                                        <br />
                                        <p className="white">
                                            {currentService.description.split('\n')[0]}
                                        </p>
                                        <br />
                                        <p className="white">
                                            {currentService.description.split('\n')[1]}
                                        </p>
                                        <br />
                                        <div className="BtnContainerWhite">
                                            <button>View Detailed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} xs={24}>
                            <div className="ServicesContentContainer">
                                <h2 className="marginBottom">
                                Professional Financial Services For Growth Success
                                </h2>

                                <div className="ServicesTagsContainer">
                                    {ServicesData.map((service, index) => (
                                        <button
                                            key={service.id}
                                            className={`ServiceTag ${selectedService === index ? 'active' : ''}`}
                                            onClick={() => handleServiceClick(index)}
                                        >
                                            {service.title.toUpperCase()}
                                        </button>
                                    ))}
                                </div>

                                <div className="ServicesAdditionalContent">
                                    <div className={`AdditionalImage LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                        <img
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/SquareSmall.jpg"
                                            alt="Professional Financial Advisory Team - Innovate Securities"
                                        />
                                    </div>
                                    <div className="AdditionalContent">
                                        <div className="DecorativeIcon">
                                            {/* <HiOutlineArrowUpRight /> */}
                                        </div>
                                        <p className="AdditionalText">
                                            Our expert team provides personalized financial guidance tailored to your investment goals.
                                            With over 30 years of market experience, we help you make informed decisions for sustainable wealth creation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;