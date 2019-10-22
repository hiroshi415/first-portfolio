import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const GithubRepos = ({ repos }) => {
  return repos.map(repo => <RepoItem repos={repo} key={repo.id} />);
};

GithubRepos.protoTypes = {
  repos: PropTypes.array.isRequired
};
export default GithubRepos;
