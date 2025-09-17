import React from "react";
import "./ListOfUpstream.css";

const ListOfUpstream = () => {
    return (
        <div className="MainContainer"  >
            <div className="Container">
                <div className="paddingSide">
                    <div className="CommonHeader">
                        <div className="SectionTagLabelContainer">
                            <div style={{ margin: "auto" }}>
                                <div className="flexVertically">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AboutHome.png" alt="List Of Upstream Icon" />
                                </div>
                                <div>
                                    <p>List Of Upstream</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center animate-blur-3d animate-in">List of Upstream Bank Accounts</h2>
                    </div>
                    <div className="marginTop">
                        <div className="TableContainer">
                            <table className="UpstreamTable">
                                <thead>
                                    <tr>
                                        <th>Segment</th>
                                        <th>Bank Name</th>
                                        <th>Branch</th>
                                        <th>Account No.</th>
                                        <th>IFSC Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cash – F & O</td>
                                        <td>HDFC Bank Ltd.</td>
                                        <td>Navrangpura</td>
                                        <td>00060340003131</td>
                                        <td>HDFC0000006</td>
                                    </tr>
                                    <tr>
                                        <td>DP</td>
                                        <td>HDFC Bank Ltd.</td>
                                        <td>Navrangpura</td>
                                        <td>00060340005445</td>
                                        <td>HDFC0000006</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListOfUpstream;