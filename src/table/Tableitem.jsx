import React from "react";
import Cell from "./Cell";


const Data = [
    {
        tag:"<html>",
        value:"this is html tage"
    },
    {
        tag:"<ls>",
        value:"this is ls tage"
    },
    {
        tag:"<list>",
        value:"this is list tage"
    },
    {
        tag:"<ol>",
        value:"this is ol tage"
    },
    {
        tag:"<head>",
        value:"this is head tage"
    },
    {
        tag:"<title>",
        value:"this is title tage"
    },
    {
        tag:"<abstract>",
        value:"this is abstract tage"
    },
    {
        tag:"<about>",
        value:"this is about tage"
    },
]

const Tableitem = () => {
    return(
        <>
       <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto row">
                    {
                    Data.map((val,index)=>{
                        return(
                        <Cell key={index} tag={val.tag} value={val.value}/>
                        );
                    })
                }
                </div>
            </div>
            </div>
        </>
    );

    
}

export default Tableitem;