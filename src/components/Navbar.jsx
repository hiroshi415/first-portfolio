import React from "react";

class Navbar extends React.Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < window.innerHeight / (10 / 7);
      const nav = document.getElementById("navbar");
      const skills = document.getElementById("skills");
      if (isTop) {
        nav.classList.remove("scrolled");
        skills.classList.remove("skills-nav");
      } else {
        nav.classList.add("scrolled");
        skills.classList.add("skills-nav");
      }
    });
  }

  render() {
    return (
      <div id="navbar" className="navbar">
      </div>
    );
  }
}

export default Navbar;
