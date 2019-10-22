import React from "react";
import "./MainPage.css";

// function _calculateAge(birthday) {
//   // birthday is a date
//   var ageDifMs = Date.now() - birthday.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1997);
// }

// console.log(_calculateAge(19970415));

class MainPage extends React.Component {
  state = { age: 0 };
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  componentDidMount() {
    this.setState({ age: this.getAge("1997-04-15") });
  }
  render() {
    return (
      <div className="mainpage">
        <h1>こんにちは！</h1>
        <div className="container">
          <p>Hi! My name is Hiroshi. I am {this.state.age} years old. </p>
          <p>I major in Data Science, and am a self taught web-developer.</p>
          <p>
          </p>
        </div>
        <div className="links container">
          <ul>
            <li>
              <a
                className="githublink"
                href="https://github.com/hiroshi415"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                className="instagramlink"
                href="https://www.instagram.com/freedomrupee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                className="resumelink"
                href="https://www.instagram.com/freedomrupee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-file" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
