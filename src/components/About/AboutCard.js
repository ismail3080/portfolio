import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Lichir Ismail</span>, based in{" "}
            <span className="purple">Toulon, France</span>.
            <br />
            I’m currently an <span className="purple">M.Sc. student</span> in
            <span className="purple"> IoT / Embedded Systems</span> (Epitech Marseille, 2025–2027)
            and working as an <span className="purple">apprentice</span> After-Sales Service technician at
            <span className="purple"> Groupe PE / Synapse Audiovisuel</span> (since March 2025).
            <br />
            <br />
            I enjoy building embedded & IoT systems (ESP32/STM32/Raspberry Pi), PCB design,
            automation (PLC), and practical electronics troubleshooting.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> IoT prototyping & embedded projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackathons & tech challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> E-sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ismail</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
