import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Contact from "./components/Contcat/Contact";
import Index from "./components/Index/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Route exact path="/" component={Index} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
