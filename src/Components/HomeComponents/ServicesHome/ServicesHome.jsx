import React, { useRef, useState } from 'react';
import "./ServicesHome.css";
import ServicesData from "../../Services/ServicesData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

const Services = () => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const handlePrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.pause();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.resume();
        }
    };

    return (
        <div className="MainContainer ServicesHomeContainer" >
            <div className="Container">
                <div className="paddingSide">
                    {/* <div className="SectionTagLabelContainer">
                        <div>
                            <div className="flexVertically">
                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="" />
                            </div>
                            <div>
                                <p>Solutions We Provide</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='CommonHeader' style={{ margin: "unset" }}>
                        <div>
                            <h2>Guiding You to Smarter Investments</h2>
                            {/* <p>Discover a wide array of tailored financial services—from equities and mutual funds to bonds and FDs—backed by 30+ years of market expertise. Whether you're a first-time investor or an institution, we help you make confident, goal-driven investment decisions.</p> */}
                            <div className='SwiperBtnContainer'>
                                <button
                                    className="swiper-btn swiper-btn-prev"
                                    onClick={handlePrevSlide}
                                    aria-label="Previous slide"
                                >
                                    &#8249;
                                </button>
                                <button
                                    className="swiper-btn swiper-btn-next"
                                    onClick={handleNextSlide}
                                    aria-label="Next slide"
                                >
                                    &#8250;
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ServicesCardsContainer marginTop">
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                slidesPerView={3}
                                spaceBetween={25}
                                freeMode={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                loop={true}
                                speed={800}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    ServicesData.map((item, index) => {
                                        const IconComponent = item.iconComponent;
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className='ServicesContainerCard'>
                                                    <div>
                                                        <div className='IconsImageContainer'>
                                                            <div>
                                                                <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Equity Market.png" alt="Equity Market Trading Icon - Stock Market Investment Services" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='ServicesHeadingContainer'>
                                                                <h3>{item.title}</h3>
                                                            </div>
                                                            <div>
                                                                <p>{item.description}</p>
                                                            </div>

                                                        </div>
                                                        <div className="BtnContainer">
                                                            <button onClick={() => {
                                                                const serviceSlug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                                                navigate(`/services/${serviceSlug}`, { state: { service: item } });
                                                            }}>
                                                                Read More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;