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
              I am passionate about turning data into actionable insights, constantly learning and growing in the field of Data Analytics.
              <br />
              <br />I am proficient in core technologies such as{" "}
              <i>
                <b className="purple">Python,Advance Excel, Data Analytics, PowerBI, MySQL, Data visualization, Data Cleaning, Tableau. </b>
              </i>
              <br />
              <br />
              My areas of interest include{" "}
              <i>
                <b className="purple">Data Cleaning, Exploratory Data Analysis (EDA), and Data Visualization</b>,where I work on delivering clear and impactful reports that guide strategy and improve processes.{" "}
              </i>
              <br />
              <br />
                I have also applied Machine Learning techniques for classification and prediction tasks, further enhancing the value of data-driven solutions.
              Beyond analytics, I am eager to explore Cloud-based data solutions, ETL pipelines, and tools like MySQL, MongoDB, and AWS, enabling efficient data management and scalable analytics frameworks.

I am actively seeking opportunities as a Data Analyst where I can apply my analytical mindset, technical skills, and passion for problem-solving to help organizations unlock the full potential of their data.

Let’s connect if you’re passionate about data and want to create impactful solutions together!
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
