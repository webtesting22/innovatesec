import React, { useState } from "react";
import { Tabs } from "antd";
import "./CompliancesAndForms.css";
import { compliancesAndFormsData } from "./CompliancesAndFormsData";

const CompliancesAndForms = () => {
    const [activeTab, setActiveTab] = useState("forms");

    const getTabData = (tabKey) => {
        return compliancesAndFormsData[tabKey] || [];
    };

    const DocumentCard = ({ document }) => (
        <div className="DocumentCard">
            <div className="DocumentIcon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="DocumentIconSvg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 13H8" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 17H8" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 9H8" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="PDFLabel">PDF</span>
            </div>
            <div className="DocumentContent">
                <h3 className="DocumentTitle">{document.title}</h3>
                <p className="DocumentSize">{document.size}</p>
            </div>
            <a href={document.viewUrl} className="ViewButton" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    );

    const tabItems = [
        {
            key: "forms",
            label: "Forms",
            children: (
                <div className="DocumentsGrid">
                    {getTabData("forms").map((document) => (
                        <DocumentCard key={document.id} document={document} />
                    ))}
                </div>
            )
        },
        {
            key: "policies",
            label: "Policies",
            children: (
                <div className="DocumentsGrid">
                    {getTabData("policies").map((document) => (
                        <DocumentCard key={document.id} document={document} />
                    ))}
                </div>
            )
        },
        {
            key: "investorCharters",
            label: "Investor Charters",
            children: (
                <div className="DocumentsGrid">
                    {getTabData("investorCharters").map((document) => (
                        <DocumentCard key={document.id} document={document} />
                    ))}
                </div>
            )
        },
        {
            key: "compliance",
            label: "Compliance Data",
            children: (
                <div className="DocumentsGrid">
                    {getTabData("compliance").map((document) => (
                        <DocumentCard key={document.id} document={document} />
                    ))}
                </div>
            )
        }
    ];

    return (
        <div className="MainContainer marginTop">
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer">
                            <div style={{ margin: "auto" }}>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="Forms Icon" />
                                </div>
                                <div>
                                    <p>Compliances & Forms</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-center animate-blur-3d animate-in">Documents & Forms</h1>
                    </div>

                    <div className="TabsContainer">
                        <Tabs
                            defaultActiveKey="forms"
                            items={tabItems}
                            onChange={setActiveTab}
                            className="CustomTabs"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompliancesAndForms