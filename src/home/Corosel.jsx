import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import table from "./../photoes/home/table.jpg";
import review from "./../photoes/home/review.jpg";
import others from "./../photoes/home/others.jpg";
import learning from "./../photoes/home/learning.jpg";
import examples from "./../photoes/home/examples.jpeg";
import cources from "./../photoes/home/cources.jpg";



const Corosel = () => {
    return (
        <>
                    <div
                        id="HomePageUpperCorosel"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="3"
                            ></li>
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="4"
                            ></li>
                            <li
                                data-target="#HomePageUpperCorosel"
                                data-slide-to="5"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src={table} alt="first slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/table" className="btn">
                                        <h3 style={{color:"white"}}>we provideing you extreme new feature for learning in very small time and you can use in your easy life</h3>
                                        <Button variant="contained">Go to tables</Button></NavLink>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={review} alt="Second slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/suggetion-review" className="btn">
                                    <h3 style={{color:"white"}}>write your suggetion and review and support us</h3>
                                        <Button variant="contained">review</Button></NavLink>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={others} alt="Second slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/others" className="btn">
                                    <h3 style={{color:"white"}}>to visit our other features and services please visit</h3>
                                        <Button variant="contained">others</Button></NavLink>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={learning} alt="Second slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/learning" className="btn">
                                    <h3 style={{color:"white"}}>learning is a good habbit. we provide additional documentation for learning..</h3>
                                        <Button variant="contained">learn about</Button></NavLink>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={examples} alt="Second slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/examples" className="btn">
                                    <h3 style={{color:"white"}}>we can do anything by practice, for practice and reference we provide different examples</h3>
                                        <Button variant="contained">examples</Button></NavLink>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={cources} alt="Second slide" style={{height:400}} />
                                <div class="carousel-caption d-none d-md-block">
                                    <NavLink to="/cources" className="btn">
                                    <h3 style={{color:"white"}}>here we provide daily free udemy and other online cources for learning purpose</h3>
                                        <Button variant="contained">enroll cources</Button></NavLink>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#HomePageUpperCorosel"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#HomePageUpperCorosel"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
        </>
    );
};

export default Corosel;
