import React from "react";
import "./OnlineDesk.css";
import { onlineDeskItems } from "./OnlineDeskData";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const OnlineDesk = () => {
    return (
        <div className="MainContainer marginTop">
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer">
                            <div style={{ margin: "auto" }}>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Online Desk Icon" />
                                </div>
                                <div>
                                    <p>Online Desk</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-center animate-blur-3d animate-in">Online Desk</h1>
                    </div>
                    <div className="OnlineDeskGrid marginTop">
                        {onlineDeskItems.map((item, index) => (
                            <a className="DeskCard" href={item.href} target="_blank" rel="noreferrer" key={index}>
                                <div className="DeskCardInner">
                                    <div>
                                        <div className="DeskLogoWrap">
                                            <img src={item.logo} alt={item.title} />
                                        </div>
                                        <br />
                                        <div className="DeskContent">
                                            <p>{item.title}</p>
                                            <span className="DeskLink">{item.cta}   <LuSquareArrowOutUpRight /></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineDesk;