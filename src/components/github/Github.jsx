import React, { Component } from "react";
import PropTypes from "prop-types";
import GithubRepos from "./GithubRepos";
import "./Github.css";

class Github extends Component {
  async componentDidMount() {
    this.props.getUser();
    this.props.getUserRepos();
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const { avatar_url, login } = this.props.user;
    const { repos } = this.props;
    return (
      <>
        <h1 style={{ textAlign: "center", fontSize:'1.5rem' }}>My Recent Uploads</h1>
        <div className="github container">
          <div className="githubleft">
            <img src={avatar_url} alt="Profile pic" style={{ width: "30%" }} />
            <p>{login}</p>
          </div>
          <div className="github-repos">
            <GithubRepos repos={repos} />
          </div>
        </div>
      </>
    );
  }
}

export default Github;
