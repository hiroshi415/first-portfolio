import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <ul className="skills-icon">
          <li>
            <i className="fab fa-html5" style={{ color: "#F16529" }} />
            <i className="fab fa-css3-alt" style={{ color: "#2965F1" }} />
            <i className="fab fa-js-square" style={{ color: "#f7df1e" }} />
            <i className="fab fa-react" style={{ color: "#00d8ff" }} />
            <i className="fab fa-python" style={{ color: "#4584b6" }} />
            <i className="fab fa-node-js" style={{ color: "#44883e" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
