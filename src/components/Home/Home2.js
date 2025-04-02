import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Aravindh.jpg"; // Ensure the path is correct
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have always been passionate about programming, constantly learning and evolving with new technologies. 💡
              <br />
              <br />I am proficient in core technologies such as{" "}
              <i>
                <b className="purple">HTML, CSS, JavaScript,Node.js,Express.js,React.js.</b>
              </i>
              <br />
              <br />
              My areas of interest include{" "}
              <i>
                <b className="purple">Web Application Development</b>, where I continuously explore innovative solutions to build scalable and secure systems.{" "}
                <b className="purple">Backend Development</b> and <b className="purple">Cloud Engineering.</b>
              </i>
              <br />
              <br />
              Beyond coding, I am also deeply engaged in Cloud Computing, DevOps, and AWS, leveraging these technologies to enhance the efficiency and scalability of applications. My expertise extends to modern frameworks like React.js and Next.js, enabling the creation of dynamic, high-performance web applications.
            </p>
          </Col>
          <Col md={4} className="Aravindh">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Aravindh" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aravindh-333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Aravindh1356"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aravindh06/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__perfect_rider_46__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
