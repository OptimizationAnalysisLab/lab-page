import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Courses from "./Courses";

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/About" component={About} /> */}
        {/* <Route path="/Publication" component={Publication} /> */}
        <Route path="/Courses" component={Courses} />
      </Switch>
    );
  }
}

export default Main;
