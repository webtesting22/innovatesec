import React, { useRef, useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import ServicesData from "./ServicesData";
import "./SingleService.css";

const SingleService = () => {
    const { serviceName } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Get service data from location state or find by service name
    const service = location.state?.service || ServicesData.find(s => {
        const serviceSlug = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return serviceSlug === serviceName;
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 300);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '-50px 0px 0px 0px'
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
    }, [isVisible]);

    if (!service) {
        return (
            <div className="MainContainer marginTop">
                <div className="Container">
                    <div className="paddingSide">
                        <div className="ServiceNotFound">
                            <h2>Service Not Found</h2>
                            <p>The requested service could not be found.</p>
                            <button onClick={() => navigate('/services')}>Back to Services</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="MainContainer marginTop" ref={sectionRef}>
            <div className="Container">
                <div className="paddingSide">
                    {/* Breadcrumb */}
                    {/* <div className="BreadcrumbContainer">
                        <button onClick={() => navigate('/services')} className="BackButton">
                            ← Back to Services
                        </button>
                    </div> */}

                    {/* Service Header */}
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer" style={{ margin: "auto" }}>
                            <div>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Financial Services Icon" />
                                </div>
                                <div>
                                    <p>DETAILED SERVICE</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center">{service.title}</h2>
                    </div>

                    {/* Service Content */}
                    <Row gutter={[40, 40]} className="ServiceContentRow">
                        <Col lg={16} xs={24}>
                            <div className="ServiceMainContent">
                                <div className={`ServiceHeroImage LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/CommonService.jpg"
                                        alt={`${service.title} - Innovate Securities`}
                                    />
                                </div>

                                <div className="ServiceDescription">
                                    <h2>Service Overview</h2>
                                    <p>{service.description.split('\n')[0]}</p>
                                    <p>{service.description.split('\n')[1]}</p>
                                </div>

                                <div className="ServiceFeatures">
                                    <h2>Key Features</h2>
                                    <Row gutter={[20, 20]}>
                                        <Col lg={12} xs={24}>
                                            <div className="FeatureCard">
                                                <div className="FeatureIcon">📊</div>
                                                <h3>Professional Expertise</h3>
                                                <p>30+ years of market experience with expert guidance for optimal investment decisions.</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24}>
                                            <div className="FeatureCard">
                                                <div className="FeatureIcon">🛡️</div>
                                                <h3>Secure Platform</h3>
                                                <p>NSE & BSE corporate membership with CDSL depository services for safe transactions.</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24}>
                                            <div className="FeatureCard">
                                                <div className="FeatureIcon">📈</div>
                                                <h3>Real-time Data</h3>
                                                <p>Access to live market data and professional research for informed investment strategies.</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24}>
                                            <div className="FeatureCard">
                                                <div className="FeatureIcon">🎯</div>
                                                <h3>Personalized Solutions</h3>
                                                <p>Tailored financial strategies aligned with your specific investment goals and risk profile.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} xs={24}>
                            <div className="ServiceSidebar">
                                {/* <div className="ServiceCard">
                                    <h3>Get Started Today</h3>
                                    <p>Ready to begin your investment journey? Our experts are here to help you make informed decisions.</p>
                                    <button className="ContactButton">Contact Our Experts</button>
                                </div>

                                <div className="ServiceStats">
                                    <h3>Why Choose Innovate Securities?</h3>
                                    <div className="StatItem">
                                        <span className="StatNumber">30+</span>
                                        <span className="StatLabel">Years Experience</span>
                                    </div>
                                    <div className="StatItem">
                                        <span className="StatNumber">NSE & BSE</span>
                                        <span className="StatLabel">Corporate Member</span>
                                    </div>
                                    <div className="StatItem">
                                        <span className="StatNumber">CDSL</span>
                                        <span className="StatLabel">Depository Partner</span>
                                    </div>
                                </div> */}

                                <div className="OtherServices">
                                    <h3>Explore Other Services</h3>
                                    <div className="OtherServicesList">
                                        {ServicesData.filter(s => s.id !== service.id).map((otherService) => {
                                            const serviceSlug = otherService.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                            return (
                                                <div key={otherService.id} className="OtherServiceItem">
                                                    <div className="OtherServiceImage">
                                                        <img
                                                            src={otherService.iconImage}
                                                            alt={`${otherService.title} - Innovate Securities`}
                                                        />
                                                    </div>
                                                    <div className="OtherServiceContent BtnContainer">
                                                        <div>
                                                            <h4>{otherService.title}</h4>
                                                            <p>{otherService.description.split('\n')[0]}</p>
                                                            <button
                                                                onClick={() => {
                                                                    navigate(`/services/${serviceSlug}`, { state: { service: otherService } });
                                                                    window.scrollTo(0, 0);
                                                                }}
                                                                // onClick={() => {
                                                                //     window.scrollTo(0, 0);
                                                                // }}
                                                            // className="OtherServiceButton"
                                                            >
                                                                View Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
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

export default SingleService;

