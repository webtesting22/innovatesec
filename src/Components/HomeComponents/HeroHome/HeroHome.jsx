import React, { useState, useEffect, useRef } from "react";
import "./HeroHome.css"
import AnimatedBannerImage from "/Image/Financial Growth.jpg"
import { Link } from "react-router-dom";
const HeroHome = () => {
    const [videoWidth, setVideoWidth] = useState(40);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const containerHeight = containerRef.current.offsetHeight;
                const windowHeight = window.innerHeight;

                let scrollProgress = 0;

                // Only start expanding when the section starts scrolling past the top of viewport
                if (rect.top <= 0 && rect.bottom >= 0) {
                    // Calculate how much of the section has been scrolled through
                    const scrolledAmount = Math.abs(rect.top);
                    const maxScrollAmount = containerHeight - windowHeight;

                    if (maxScrollAmount > 0) {
                        scrollProgress = scrolledAmount / maxScrollAmount;
                    }
                } else if (rect.bottom < 0) {
                    // Section has completely passed
                    scrollProgress = 1;
                }

                // Ensure scrollProgress is between 0 and 1
                scrollProgress = Math.max(0, Math.min(1, scrollProgress));

                // Calculate width based on scroll progress (40% to 100%)
                const newWidth = 40 + (scrollProgress * 60); // 40% + (progress * 60%) = 40% to 100%
                setVideoWidth(newWidth);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleMouseEnter = () => {
        setShowButton(true);
    };

    const handleMouseLeave = () => {
        setShowButton(false);
    };

    return (
        <div ref={sectionRef}>
            <div className="MainContainer marginTop">
                <div className="Container">
                    <div className="FlexContainer paddingSide" ref={containerRef}>
                        <div className="LeftSideContentContainer">
                            <div className="SectionTagLabelContainer">
                                <div>
                                    <div className="flexVertically">
                                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/RocketPng.png" alt="Financial Growth Rocket Icon - Empowering Investment Success" />
                                    </div>
                                    <div>
                                        <p>Empowering Smarter Financial Futures</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>Your Trusted Partner in Financial Growth</h1>
                                <p>With over 30 years of experience in capital markets, Innovate Securities offers personalized investment solutions across shares, bonds, mutual funds, and more.</p>
                                <p>We serve individuals, corporates, and institutions with expertise, integrity, and long-term vision.</p>
                                <div className="BtnContainer">
                                    <Link to="/about-us"> <button>About Innovate</button></Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="RightSideVideoContainer"
                            style={{ width: `${videoWidth}%` }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`LayerImage ${isVisible ? 'reveal-image' : ''}`}>
                                <div className="VideoWrapper">
                                    <video
                                        ref={videoRef}
                                        src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a%2F682b74c0505f21d18c54d43f_4426377-uhd_3840_2160_25fps-transcode.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        className="w-100"

                                    ></video>
                                    <div
                                        className={`PlayPauseButton ${showButton ? 'visible' : ''} ${isPlaying ? 'playing' : 'paused'}`}
                                        onClick={togglePlayPause}
                                    >
                                        <div className="ButtonIcon">
                                            {isPlaying ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="6" y="4" width="4" height="16"></rect>
                                                    <rect x="14" y="4" width="4" height="16"></rect>
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polygon points="5,3 19,12 5,21"></polygon>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="AnimatedBannerImageContainer">
                            <img src={AnimatedBannerImage} alt="Innovate Securities Financial Services Banner - Investment Solutions" />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroHome