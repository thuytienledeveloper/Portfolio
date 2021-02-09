import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/bio.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
        <Social />
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "My name is Thuy Tien Le ",
            "I'm a designer that loves to code..."
          ]}
          speed={150}
          eraseDelay={10}
        />
      </div>
    );
  }
}
export default Home;
