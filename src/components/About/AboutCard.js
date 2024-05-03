import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ARAVINDH A </span>
            from <span className="purple"> DHARMAPURI, India.</span>
            <br />
            I am currently Currently pursuing a Computer Science Engineering
            <br />
            I have completed by HSC in Senthil Matric hr sec School.
            Dharmapuri.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Seeing Adventure Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "LEARN FROM ANYONE,BUT FOLLOW NO ONE!"{" "}
          </p>
          <footer className="blockquote-footer">ARAVINDH A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
