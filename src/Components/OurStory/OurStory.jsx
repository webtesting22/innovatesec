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
                                            <h3>A Humble Beginning</h3>
                                            <p>Founded as Ampi Investments by the late Shri Bhushan Pranlal Shah. Operated as a small broking firm associated with a sub-broker from the Bombay Stock Exchange (BSE). His innovative vision and values laid the foundation for future growth.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Early Years</div>
                                        <div className="TimelineContent">
                                            <h3>Next Generation Joins</h3>
                                            <p>Piyush M. Parikh and Amar M. Parikh joined the business. Brought new ideas and professional drive to expand operations and deepen client relationships.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Transformation</div>
                                        <div className="TimelineContent">
                                            <h3>A Path of Purpose</h3>
                                            <p>Piyush Parikh chose to pursue the spiritual path of Diksha. Amar M. Parikh assumed leadership, ushering in a new era of transformation.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Evolution</div>
                                        <div className="TimelineContent">
                                            <h3>Evolution into Innovate Securities</h3>
                                            <p>Under Amar's guidance and his team's support, the firm evolved into a research-driven, client-focused financial services company. Serving a broad base of individuals, corporates, dealers, and sub-brokers.</p>
                                        </div>
                                    </div>

                                    <div className="TimelineItem">
                                        <div className="TimelineYear">Today</div>
                                        <div className="TimelineContent">
                                            <h3>Continuing Excellence</h3>
                                            <p>Over 3 decades of industry experience. Known for reliable, insightful, and ethical financial solutions. Continuing to grow as a trusted name in the financial sector.</p>
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