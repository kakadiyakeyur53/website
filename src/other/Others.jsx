import React from "react";
import CustomizedTimeline from "../other/CustomizedTimeline";

const Others = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-8 mx-auto my-5">
                    <div className="row">
                        <div className="col-6">
                        <CustomizedTimeline/>
                        </div>
                        <div className="col-6">
                        <CustomizedTimeline/>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </>
    );

    
}

export default Others;