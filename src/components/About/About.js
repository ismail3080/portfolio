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
              À propos de <strong className="purple">moi</strong>
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
          <strong className="purple">Compétences </strong> techniques
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que j’utilise
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Expérience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={10} style={{ color: "white", textAlign: "left" }}>
            <ul>
              <li>
                <strong>Synapse Audiovisuel</strong> — Alternant SAV / Support technique (mars 2025 – aujourd’hui)
                <br />Support technique, suivi SAV, diagnostic et réparation de matériels audiovisuels professionnels.
              </li>
              <li>
                <strong>YAZAKI MEKNES (YMM)</strong> — Stage PFE (avril 2024 – juin 2024)
                <br />Développement d’une application de gestion de stock et optimisation d’un système de tri PVC en milieu industriel.
              </li>
              <li>
                <strong>TINKIET France (hybride)</strong> — Stage PFE (mars 2023 – juin 2023)
                <br />Conception de cartes ESP32, programmation embarquée et mise en place de solutions edge computing.
              </li>
              <li>
                <strong>LCM – Aïcha</strong> — Stage d’observation (juillet 2022)
                <br />Découverte de la maintenance industrielle et du diagnostic d’équipements.
              </li>
            </ul>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Formation</strong> & certifications
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={10} style={{ color: "white", textAlign: "left" }}>
            <ul>
              <li><strong>Master — Expertise des Systèmes d’Information (IoT)</strong>, Epitech Marseille (2025 – 2027)</li>
              <li><strong>Licence Sciences pour l’ingénieur</strong>, Université de Toulon (2024 – 2025)</li>
              <li><strong>Licence Sciences et Techniques EEA</strong>, Faculté des Sciences et Techniques (2023 – 2024)</li>
              <li><strong>DUT Systèmes embarqués</strong>, EST Fès (2021 – 2023)</li>
              <li>Certifications : Systèmes embarqués critiques (INSA), Digital Electronics (PROTEUS), Edge Computing 3.0, OOP Python</li>
              <li>Langues : Arabe (maternelle), Français (B2/C1), Anglais (professionnel)</li>
            </ul>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
