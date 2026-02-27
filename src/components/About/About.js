import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'm</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={10} style={{ color: "white", textAlign: "left" }}>
            <ul>
              <li>
                <strong>Groupe PE / Synapse Audiovisuel</strong> — Apprentice After-Sales Service Technician (Mar 2025 – Present)
                <br />Maintenance/repair of audiovisual equipment, on-site installation, and electronic diagnostics.
              </li>
              <li>
                <strong>YAZAKI MEKNES (YMM)</strong> — Final-year internship (Apr 2024 – Jun 2024)
                <br />Stock management application and PVC sorting system; industrial automation (Siemens/Schneider).
              </li>
              <li>
                <strong>TINKIET France (Hybrid)</strong> — Final-year internship (Mar 2023 – Jun 2023)
                <br />ESP32 PCB design, embedded programming, and edge computing exploration.
              </li>
              <li>
                <strong>LCM – Aïcha</strong> — Maintenance internship (Jul 2022)
              </li>
            </ul>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Education</strong> & Certifications
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={10} style={{ color: "white", textAlign: "left" }}>
            <ul>
              <li><strong>M.Sc. — Information Systems Expertise (IoT)</strong>, Epitech Marseille (2025 – 2027)</li>
              <li><strong>B.Sc. — Engineering Sciences</strong>, University of Toulon (2024 – 2025)</li>
              <li><strong>B.Sc. — Electrical Engineering & Automation</strong>, FST (2023 – 2024)</li>
              <li><strong>University Diploma — Embedded Systems</strong>, EST Fès (2021 – 2023)</li>
              <li>Certifications: Safety-Critical Embedded Systems (INSA), Digital Electronics (PROTEUS), Edge Computing 3.0, OOP Python (2022)</li>
              <li>Languages: Arabic (native), French (fluent), English (fluent)</li>
            </ul>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
