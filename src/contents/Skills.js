import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        "[ 'HTML/CSS/JS', 'jQuery', 'Bootstrap/Material Design', 'Webpack/Gulp/Grunt', 'SASS/Less', 'npm/yarn/bower',' GIT/CVS','RWD/W3C/ARIA/WCAG', 'PHP', 'WordPress', 'Shopify/Liquid', 'ReactJs', 'Front End Developer','Photoshop', 'Illustrator', 'After Effects', 'Motion design', 'UX/UI', 'Sketch' ]"
      ]
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map(value => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;
