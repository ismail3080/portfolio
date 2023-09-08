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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Agriculture"
              description="The Tomato Sorting Machine using Raspberry Pi is a sophisticated agricultural automation project aimed at enhancing the efficiency and accuracy of tomato sorting processes. By utilizing computer vision and machine learning techniques, the project enables the Raspberry Pi to identify and categorize tomatoes based on their size and color. This automation minimizes human intervention, reduces errors, and increases the overall productivity of the tomato sorting process."
              ghLink="https://github.com/ismail3080/Sorting-Tomato"
              demoLink="https://circuitdigest.com/microcontroller-projects/tomato-sorting-machine-using-raspberry-pi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mobile application"
              description="Mobile gallery application build with react-native."
              ghLink="https://github.com/ismail3080/app"
              demoLink="https://ionicframework.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Radio Frequency Identification"
              description="The RFID Door Access Control System is a security project developed to control and monitor access to a restricted area using RFID (Radio-Frequency Identification) technology. This project leverages RFID cards and a microcontroller to grant or deny access to individuals based on their authorized RFID credentials. By implementing this system, security and access control can be effectively managed, and unauthorized entries can be prevented."
              ghLink="https://github.com/ismail3080/RFID-DOOR-ACCEESS/tree/main"
              demoLink="https://lockconnection.net/rfid-locks-for-wood/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ESP32 and Image Processing" 
              description="The ESP32 Software Development project focuses on creating and implementing software applications for the ESP32 microcontroller platform. The ESP32 is a versatile and powerful microcontroller that supports both Wi-Fi and Bluetooth connectivity, making it suitable for a wide range of IoT (Internet of Things) and embedded systems applications. The project involves developing code and applications to leverage the capabilities of the ESP32 for various purposes. t make us able to take image and send it to sever using MQQTT protocole."
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