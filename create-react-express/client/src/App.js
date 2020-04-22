import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Searchpage from "./Pages/searchpage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>(React) Google Books Search</h2>
          <p>Search for and Save Books of Interest</p>
        </div>

        <p className="App-intro">
         <Searchpage />
      </p></div>
    );
  }
}

export default App;
