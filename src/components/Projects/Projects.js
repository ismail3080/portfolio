import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
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
          A few projects and prototypes from embedded systems & IoT.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tomato Sorting Machine (Raspberry Pi)"
              description="Automated tomato sorting using computer vision on Raspberry Pi. Classifies tomatoes by color/size to reduce manual work and improve throughput."
              ghLink="https://github.com/ismail3080/Sorting-Tomato"
              demoLink="https://circuitdigest.com/microcontroller-projects/tomato-sorting-machine-using-raspberry-pi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TimeManager (Web App)"
              description="Time tracking / attendance web app built with Node.js, React, TypeScript and SQL."
              ghLink="https://github.com/ismail3080/Time-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RFID Door Access Control"
              description="Secure door access system using RFID + microcontroller. Validates authorized cards and controls the lock reliably."
              ghLink="https://github.com/ismail3080/RFID-DOOR-ACCEESS/tree/main"
              demoLink="https://lockconnection.net/rfid-locks-for-wood/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ESP32 IoT (MQTT / Edge)"
              description="ESP32-based IoT prototypes, including sensor/data pipelines and MQTT communication for edge-connected devices."
              ghLink="https://github.com/ismail3080/ESP32-software/tree/main/Code%20ESP32"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;