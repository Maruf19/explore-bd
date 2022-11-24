import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Packages from "./Components/Packages/Packages";
import Schedule from "./Components/Schedule/Schedule";
import Snap from "./Components/Snap/Snap";
import Contact from "./Components/Contact/Contact";
import Book from "./Components/Book/Book";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/packages" component={Packages}></Route>
        <Route exact path="/schedule" component={Schedule}></Route>
        <Route exact path="/snap" component={Snap}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/book" component={Book}></Route>
      </Switch>
    </div>
  );
};

export default App;
