import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Feature from "./Feature";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/" data-cy="homeNav">Home</NavLink></li>
            <li><NavLink to="/stuff" data-cy="stuffNav">Stuff</NavLink></li>
            <li><NavLink to="/contact" data-cy="contactNav">Contact</NavLink></li>
            <li><NavLink to="/feature" data-cy="featureNav">Feature</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/feature" component={Feature}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;