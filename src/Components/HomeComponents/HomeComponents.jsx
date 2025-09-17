import React from 'react'
import HeroHome from './HeroHome/HeroHome'
import HomeAbout from './HomeAbout/HomeAbout'
import ServicesHome from './ServicesHome/ServicesHome'
import ProgressReach from './ProgressReachComponent/ProgressReach'
import InvestorCharters from './InvestorCharters/InvestorCharters'
import ListOfUpstream from './ListOfUpstream /ListOfUpstream'
const HomeComponents = () => {
    return (
        <>
            <HeroHome />
            <ServicesHome />
            <HomeAbout />
            <InvestorCharters />
            <ListOfUpstream />
            {/* <ProgressReach /> */}
        </>
    )
}

export default HomeComponents