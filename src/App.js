import React from "react";
import "./App.css";
import axios from "axios";

import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import MyWork from "./components/mywork/MyWork";
import Github from "./components/github/Github";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  //getting single users from github
  getUser = async () => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/hiroshi415
      ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} 
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //make sure check that & is changed to ?
    //no more search
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async () => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/hiroshi415/repos?per_page=6&sort=created:asc
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} 
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    return (
      <div className="App">
        <MainPage />
        <Navbar />
        <Skills />
        <MyWork />
        <Github
          getUserRepos={this.getUserRepos}
          getUser={this.getUser}
          user={this.state.user}
          repos={this.state.repos}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
