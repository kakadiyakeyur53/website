import React from "react";
import Suggetion from "./Suggetion";
import Review from "./Review";

const SR = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto row">
            <Suggetion />
            <Review />
          </div>
        </div>
      </div>
    </>
  );
};

export default SR;
