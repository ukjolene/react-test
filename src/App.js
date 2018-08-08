import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1 offset-5">
            <Header age={12}></Header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
