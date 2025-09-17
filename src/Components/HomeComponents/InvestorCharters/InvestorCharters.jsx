import React from "react";
import "./InvestorCharters.css";
import { Row, Col } from "antd";
const InvestorCharters = () => {

    const investorChartersData = [
        {
            id: 1,
            title: "Investor Charter for Stock Brokers",
            pdfLink: "Investor Charters",
            image: "https://images.unsplash.com/photo-1723158597314-4760daf1aaae?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Investor Charter for Depositories and Depository Participants - August 2025",
            pdfLink: "Investor Charters",
            image: "https://images.unsplash.com/photo-1723158597314-4760daf1aaae?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <div className="MainContainer">
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer">
                            <div style={{ margin: "auto" }}>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Investment Confidence Icon - Trusted Financial Guidance" />
                                </div>
                                <div>
                                    <p>Investor Charters</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center">For Depository Participants & Stock Brokers</h2>
                    </div>
                    <div className="InvestorChartersCardsContainer marginTop">
                        <Row gutter={[16, 16]} className="w-100">
                            {investorChartersData.map((item) => (
                                <Col key={item.id} lg={12} md={12} xs={24}>
                                    <div className="InvestorChartersCard">
                                        <img src={item.image} alt={item.title} />
                                        <div className="TitleContainer">
                                            <h3 className="white">{item.title}</h3>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorCharters