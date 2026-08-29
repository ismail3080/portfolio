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
          Mes <strong className="purple">projets </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Quelques réalisations autour des systèmes embarqués, de l’IoT et du développement applicatif.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tomato Sorting Machine (Raspberry Pi)"
              description="Machine de tri automatique des tomates sur Raspberry Pi : reconnaissance par vision et séparation selon la couleur et le calibre."
              ghLink="https://github.com/ismail3080/Sorting-Tomato"
              demoLink="https://circuitdigest.com/microcontroller-projects/tomato-sorting-machine-using-raspberry-pi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TimeManager (Web App)"
              description="Application web de suivi du temps et de la présence, développée avec Node.js, React, TypeScript et SQL."
              ghLink="https://github.com/ismail3080/Time-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RFID Door Access Control"
              description="Système de contrôle d’accès RFID pour porte sécurisée : vérification des badges autorisés et commande fiable du verrou."
              ghLink="https://github.com/ismail3080/RFID-DOOR-ACCEESS/tree/main"
              demoLink="https://lockconnection.net/rfid-locks-for-wood/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ESP32 IoT (MQTT / Edge)"
              description="Prototypes IoT sur ESP32 avec collecte de données capteurs et communication MQTT pour des usages edge."
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