import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiMysql,
  SiPowerbi,
  SiPandas,
  SiJupyter,
  SiTableau,
  SiTensorflow,
  SiApachespark
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Python Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Git / GitHub Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* MySQL Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      {/* Power BI Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>

      {/* Pandas Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

      {/* Jupyter Notebook Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      {/* Tableau Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>

      {/* Machine Learning (TensorFlow) Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

      {/* Data Processing (Apache Spark) Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>

    </Row>
  );
}

export default Techstack;
