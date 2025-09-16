import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftpowerpoint,
  SiMicrosoftteams,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiJupyter,
  SiAnaconda,
  SiLinux,
  SiOracle
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Power BI (using PowerPoint as closest available) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
      </Col>

      {/* Microsoft Teams */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>

      {/* Microsoft Word */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
      </Col>

      {/* Microsoft Excel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>

      {/* Jupyter Notebook */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      {/* Anaconda */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>

      {/* Linux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

      {/* Oracle Virtual Machine */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>

    </Row>
  );
}

export default Toolstack;
