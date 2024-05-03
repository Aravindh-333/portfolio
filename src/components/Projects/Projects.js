import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Locator Using facial Recognition"
              description="The implementation of facial detection using biometric marking offers a promising solution for tracking individuals in areas covered by cameras. By comparing biometric data from a victim's image with live stream video, we can accurately identify and locate individuals in real-time, enhancing security and surveillance capabilities"
              ghLink="https://github.com/Aravindh-333/Locator-using-Facial-recognition.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
