import React from 'react'
import HeroHome from './HeroHome/HeroHome'
import HomeAbout from './HomeAbout/HomeAbout'
import ServicesHome from './ServicesHome/ServicesHome'
import ProgressReach from './ProgressReachComponent/ProgressReach'
const HomeComponents = () => {
    return (
        <>
            <HeroHome />
            <ServicesHome />
            <HomeAbout />
    
            {/* <ProgressReach /> */}
        </>
    )
}

export default HomeComponents