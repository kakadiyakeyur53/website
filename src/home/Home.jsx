import React from "react";
import Corosel from "./Corosel";
import Services from "./Services";
//import Speeddial from "./Speeddial";
import Developers from "./Developers";
import Footer from "../Footer";

const Home = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <Corosel />
                    <Services />
                    <Developers/>
                    <Footer/>
                </div>
            </div>
            </div>
        </>
    );
}

export default Home;