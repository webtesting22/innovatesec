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

    // Helper function to handle both JSX and string descriptions
    const getDescriptionText = (description) => {
        if (typeof description === 'string') {
            return description;
        } else if (React.isValidElement(description)) {
            // For JSX elements, we need to extract text content
            const textContent = React.Children.toArray(description.props.children)
                .map(child => {
                    if (typeof child === 'string') {
                        return child;
                    } else if (React.isValidElement(child)) {
                        return React.Children.toArray(child.props.children).join('');
                    }
                    return '';
                })
                .join('');
            return textContent;
        }
        return '';
    };

    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper && swiperRef.current.swiper.autoplay) {
            swiperRef.current.swiper.autoplay.pause();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper && swiperRef.current.swiper.autoplay) {
            swiperRef.current.swiper.autoplay.resume();
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
                    <div className='SwiperContainer'>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false,
                            // }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            modules={[Autoplay, FreeMode, Pagination, Navigation]}
                            className="mySwiper"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                ServicesData.map((item, index) => {
                                    const IconComponent = item.iconComponent;
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className='ServicesContainerCard marginTop'>
                                                <div>
                                                    <div className='IconsImageContainer'>
                                                        <div>
                                                            <img src={item.iconImage} alt={item.title} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='ServicesHeadingContainer'>
                                                            <h3>{item.title}</h3>
                                                        </div>
                                                        <div>
                                                            <p>{item.servicesCardText}</p>
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
    )
}

export default Services;