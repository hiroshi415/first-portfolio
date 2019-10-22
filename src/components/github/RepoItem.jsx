// import React from "react";
// import propTypes from "prop-types";

// const RepoItem = ({ repos }) => {
//   return (
//     <div className="repoitems">
//       <h3>
//         <a href={repos.html_url} target="_blank" rel="noopener noreferrer">
//           {repos.name}
//         </a>
//       </h3>
//       <p>{repos.language}</p>
//       <p>{repos.description}</p>
//     </div>
//   );
// };

// RepoItem.propTypes = {
//   repos: propTypes.object.isRequired
// };

// export default RepoItem;

import React from "react";
import propTypes from "prop-types";

class RepoItem extends React.Component {
  render() {
    const { repos } = this.props;
    let language = repos.language;
    return (
      <div className="repoitems">
        <h3>
          <a href={repos.html_url} target="_blank" rel="noopener noreferrer">
            {repos.name}
          </a>
        </h3>
        {language === "HTML" && <p id="HTML"><strong>{language}</strong></p>}
        {language === "Python" && <p id="python"><strong>{language}</strong></p>}
        {language === "JavaScript" && <p id="javascript"><strong>{language}</strong></p>}
        {language !== "HTML" &&
          language !== "Python" &&
          language !== "JavaScript" && <p><strong>{language}</strong></p>}
        <p>{repos.description}</p>
      </div>
    );
  }
}

RepoItem.propTypes = {
  repos: propTypes.object.isRequired
};

export default RepoItem;
