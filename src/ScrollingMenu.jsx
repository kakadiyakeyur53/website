import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const ScrollingMenu = () => {
    return (
        <>
        
        <div className="col-3" style={{backgroundColor:"green"}}>
                           <Scrollbars style={{width:"100%" ,  height:"100%"}}>

                           </Scrollbars>
                        </div>
        </>
    );
}

export default ScrollingMenu;