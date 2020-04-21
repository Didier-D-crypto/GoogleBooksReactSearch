import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Searchpage from "./Pages/searchpage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <Searchpage/>
          <h2></h2>
        </div>

        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
