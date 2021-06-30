import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">keyur kakadiya</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 nav-tabs justify-content-end">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/table">Tables</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/learning">Learning</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/cources">Cources</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/examples">examples</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/others">Others</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/suggetion-review">{"suggestion&review"}</NavLink>
                                        </li>                                      
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;