import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profilepic from "../img/bio.gif";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const About = props => {
  return (
    <div className="condiv">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="subtopic">About Me</h1>
            <Row>
              <Col md={6}>
                <Image src={profilepic} alt="ProfilePic" fluid />
              </Col>
              <Col md={6}>
                <p>
                  Hello, I’m Thuy Tien Le Interaction Designer & Developer
                  currently living in Irvine, CA
                </p>
                <p>
                  The projects you can find in{" "}
                  <a
                    href="https://thuytienle.com/"
                    target="_blank"
                    className="gradient-text"
                  >
                    my portfolio
                  </a>{" "}
                  are works or
                  personal projects. In any case, I put a lot of effort into it,
                  to get the best result possible. I'm passionate about Interaction Design and I'm interested in everything related to design and
                  coding.
                </p>
                <p>
                  You want to work with me, have a question or just like my
                  projects? Don't hesitate to contact me.
                </p>
                <button className="contact-link">
                  <Link to="/contact">Contact Me</Link>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
