import React, { useRef, useState, useEffect } from "react";
import "./OurStory.css";
import { Row, Col } from "antd";

const OurStory = () => {
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

    const BackgroundImage = "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OverlayBack.jpg"
    return (
        <div className="OurStoryContainer" ref={sectionRef}>
            <div className="MainContainer marginTop">
                <div className="Container">
                    <div className="paddingSide">
                        <div className="CommonHeader">
                            <div className="SectionTagLabelContainer" style={{ margin: "auto" }}>
                                <div>
                                    <div className="flexVertically">
                                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Innovate Securities Journey Icon - 40+ Years of Financial Excellence" />
                                    </div>
                                    <div>
                                        <p>Our Journey Since 1980</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-center">From Humble Beginnings to Trusted Excellence</h2>

                        </div>

                        <div className="marginTop">
                            <Row gutter={[16, 16]}>
                                <Col lg={24} md={24} xs={24}>
                                    <div className={`StoryImageContainer LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OurStory.jpg" alt="Innovate Securities Success Story - Financial Growth and Investment Excellence" />
                                    </div>
                                </Col>
                                <Col lg={24} md={24} xs={24}>
                                    <div className={`StoryContentContainer ${isVisible ? 'animate-content' : ''}`}>
                                        <div className="StorySection">
                                            <div className="StoryParagraph">
                                                <p>
                                                    The journey of <strong>Innovate Securities Pvt. Ltd.</strong> began in 1980, when the late <strong>Shri Bhushan Pranlal Shah</strong> founded <strong>Ampi Investments</strong>, a small broking firm associated with a sub-broker from the <strong>Bombay Stock Exchange</strong>. His innovative vision laid the foundation for <strong>Innovate Securities</strong>, what would become a trusted name in the financial sector.
                                                </p>
                                            </div>

                                            <div className="StoryParagraph">
                                                <p>
                                                    In the subsequent years, <strong>Piyush M. Parikh</strong> and <strong>Amar M. Parikh</strong> joined the business, bringing their unique perspectives and expertise. After <strong>Piyush Parikh</strong> chose to pursue the path of <em>Diksha</em>, <strong>Amar Parikh</strong> took over leadership, guiding the firm through its evolution. Under his direction, and his team's support, Innovate Securities has grown from its modest beginnings into a well-established, research-driven corporate entity.
                                                </p>
                                            </div>

                                            <div className="StoryParagraph">
                                                <p>
                                                    Today, with over three decades of experience, Innovate Securities continues to serve a wide range of individual and corporate clients, sub-brokers, and dealers, delivering innovative and reliable financial solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                            </Row>
                        </div>

                        <div className="StackImageAnimation">
                            <div className="marginTop">
                                <div className={`StoryTimelineContainer ${isVisible ? 'animate-timeline' : ''}`}>
                                    <div className="TimelineItem">
                                        <div className="TimelineYear">1980</div>
                                        <div className="TimelineContent">
                                            <h3>The Foundation</h3>
                                            <p>Shri Bhushan Pranlal Shah founded Ampi Investments, establishing our roots in the Bombay Stock Exchange.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Later Years</div>
                                        <div className="TimelineContent">
                                            <h3>New Leadership</h3>
                                            <p>Piyush M. Parikh and Amar M. Parikh joined, bringing fresh perspectives and expertise to drive growth.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Evolution</div>
                                        <div className="TimelineContent">
                                            <h3>Transformation</h3>
                                            <p>Under Amar Parikh's leadership, we evolved into a research-driven corporate entity serving diverse clients.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Today</div>
                                        <div className="TimelineContent">
                                            <h3>Continued Excellence</h3>
                                            <p>Over three decades of experience, delivering innovative financial solutions to a wide range of clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;