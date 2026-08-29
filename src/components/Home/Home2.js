import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUI <span className="purple"> SUIS-JE </span> ?
            </h1>
            <p className="home-about-body">
              Je suis passionné par la programmation, l’électronique, la robotique
              et l’Internet des Objets.
              <br />
              <br />Au quotidien, je travaille avec
              <i>
                <b className="purple"> C/C++, Python, VHDL </b>
              </i>
              et je développe aussi des outils web quand ils apportent une vraie
              valeur au projet.
              <br />
              <br />
              Je m’intéresse particulièrement aux&nbsp;
              <i>
                <b className="purple">systèmes embarqués et à l’IoT</b>, notamment
                avec ESP32, STM32 et Raspberry Pi, ainsi qu’à l’automatisme
                industriel.
              </i>
              <br />
              <br />
              Selon les besoins, j’utilise aussi des frameworks modernes
              <i>
                <b className="purple"> (React.js / Node.js)</b>
              </i>
              pour créer des interfaces, outils métiers ou APIs.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI</h1>
            <p>
              N’hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ismail3080"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismail-lichir-3858a4222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ismaillichir501@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
