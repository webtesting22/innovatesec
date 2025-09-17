import React, { useState } from "react";
import { Tabs } from "antd";
import "./CompliancesAndForms.css";

const CompliancesAndForms = () => {
    const [activeTab, setActiveTab] = useState("forms");

    const formsData = [
        {
            id: 1,
            title: "Combined Account Opening Forms",
            size: "3.199 MB",
            downloadUrl: "#"
        },
        {
            id: 2,
            title: "New Account Opening Process",
            size: "2.89 MB",
            downloadUrl: "#"
        },
        {
            id: 3,
            title: "Account Modification Form",
            size: "60.048 KB",
            downloadUrl: "#"
        },
        {
            id: 4,
            title: "Account Closure Form",
            size: "204.65 KB",
            downloadUrl: "#"
        },
        {
            id: 5,
            title: "Nomination Form",
            size: "378.125 KB",
            downloadUrl: "#"
        },
        {
            id: 6,
            title: "CKYC Form",
            size: "3.696 MB",
            downloadUrl: "#"
        }
    ];

    const policiesData = [
        {
            id: 1,
            title: "Privacy Policy",
            size: "245 KB",
            downloadUrl: "#"
        },
        {
            id: 2,
            title: "Terms of Service",
            size: "189 KB",
            downloadUrl: "#"
        }
    ];

    const disclosuresData = [
        {
            id: 1,
            title: "Risk Disclosure Document",
            size: "1.2 MB",
            downloadUrl: "#"
        },
        {
            id: 2,
            title: "Annual Disclosure",
            size: "856 KB",
            downloadUrl: "#"
        }
    ];

    const complianceData = [
        {
            id: 1,
            title: "Compliance Report 2024",
            size: "2.1 MB",
            downloadUrl: "#"
        },
        {
            id: 2,
            title: "Audit Report",
            size: "1.8 MB",
            downloadUrl: "#"
        }
    ];

    const getTabData = (tabKey) => {
        switch (tabKey) {
            case "forms": return formsData;
            case "policies": return policiesData;
            case "disclosures": return disclosuresData;
            case "compliance": return complianceData;
            default: return formsData;
        }
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
            <a href={document.downloadUrl} className="DownloadButton" download>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            key: "disclosures",
            label: "Disclosures",
            children: (
                <div className="DocumentsGrid">
                    {getTabData("disclosures").map((document) => (
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