import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m’appelle <span className="purple">Lichir Ismail</span>
            et je suis basé à <span className="purple">Toulon, France</span>.
            <br />
            Je suis actuellement en{" "}
            <span className="purple">Master IoT / Systèmes embarqués</span>{" "}
            (Epitech Marseille, 2025–2027) et en{" "}
            <span className="purple">alternance</span> chez
            <span className="purple"> Synapse Audiovisuel</span> depuis mars 2025.
            <br />
            <br />
            J’aime concevoir des solutions concrètes en systèmes embarqués et IoT
            (ESP32/STM32/Raspberry Pi), en automatisme industriel et en
            diagnostic électronique.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Prototypage IoT et projets embarqués
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackathons et défis techniques
            </li>
            <li className="about-activity">
              <ImPointRight /> E-sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des solutions utiles, fiables et durables."{" "}
          </p>
          <footer className="blockquote-footer">Ismail</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
