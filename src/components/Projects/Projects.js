import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
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
              title="FaceScan 360: Advanced Real-Time Recognition and Tracking System"
              description="The problem is to design and implement a system that efficiently manages user authentication and authorization while providing functionalities for comparing and processing images. The system should support secure storage of user credentials, facilitate role-based access control, and enable accurate image similarity analysis. Additionally, it must handle multimedia content, including images and videos, and ensure secure, scalable management of user data and related resources.
"
              ghLink="https://github.com/Aravindh-333/Locator-using-Facial-recognition.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
