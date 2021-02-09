import React, { Component } from "react";
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          href="https://github.com/thuytienledeveloper?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/thuytienle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}
export default Social;
