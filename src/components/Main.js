import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import React from "react";
import NavBar from "./NavBar/NavBar";
import SingleRoom from "./Rooms/SingleRoom";




function Main() {
    return (
        <div >
            <NavBar />

            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Rooms" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Redirect from='/' to="/Home" />
            </Switch>


        </div>
    );
}

export default Main;
