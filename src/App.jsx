import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import Cources from "./cources/Cources";
import Learning from "./learning/Learning";
import Others from "./other/Others";
import SR from "./review/SR"
import Table from "./table/Table";
import Navbar from "./Navbar";
import Tableitem from "./table/Tableitem"
import Examples from "./examples/Examples";
import Footer from "./Footer";


const App = () => {
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/examples" component={Examples} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/table/c" component={Tableitem} />
            <Route exact path="/learning" component={Learning} />
            <Route exact path="/cources" component={Cources} />
            <Route exact path="/others" component={Others}/>
            <Route exact path="/suggetion-review" component={SR}/>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
        </>
    );
}

export default App;