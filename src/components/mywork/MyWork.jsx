import React, { Component } from "react";
import "./MyWork.css";

class MyWork extends Component {
  render() {
    return (
      <div className="mywork">
        <h1>Here are some of my work</h1>
        <div className="myworks container">
          <div className="onhoverzoom1">
            <img src={require("./pythonexplained.png")} alt="website" />
            <a
              href="https://github.com/hiroshi415/Python_Explained"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="firstGithub">Github</p>
            </a>
            <a
              href="https://hiroshi415.github.io/Python_Explained/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="firstsite">Site</p>
            </a>
          </div>
          <div className="onhoverzoom2">
            <img src={require("./pythonexplained.png")} alt="website" />
            <a href="https://hiroshi415.github.io/Python_Explained/">
              <p className="secondGithub">Github</p>
            </a>
            <a href="https://github.com/hiroshi415/Python_Explained">
              <p className="secondsite">Site</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
