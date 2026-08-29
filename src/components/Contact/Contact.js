import React, { useCallback, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineCopy, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const email = "ismaillichir501@gmail.com";
  const phoneDisplay = "+33 6 17 99 77 60";
  const location = "Toulon, France";

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Prise de contact — Portfolio");
    const body = encodeURIComponent(
      "Bonjour Ismail,\n\nJ’ai consulté votre portfolio et je souhaite échanger avec vous.\n\nCordialement,"
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email]);

  const [copyState, setCopyState] = useState("idle");

  const fallbackCopyText = useCallback((text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const ok = fallbackCopyText(email);
        if (!ok) throw new Error("copy failed");
      }

      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => setCopyState("idle"), 2500);
    }
  }, [email, fallbackCopyText]);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              Me <strong className="purple">contacter</strong>
            </h1>
            <p style={{ color: "white" }}>
              Si le bouton e-mail ne s’ouvre pas sur votre appareil, vous pouvez
              copier mon adresse et m’écrire directement.
            </p>

            <div style={{ color: "white", textAlign: "left" }}>
              <p>
                <strong>E-mail :</strong> {email}
              </p>
              <p>
                <strong>Téléphone :</strong> {phoneDisplay}
              </p>
              <p>
                <strong>Localisation :</strong> {location}
              </p>
            </div>

            <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
              <Col xs="auto" style={{ paddingBottom: "10px" }}>
                <Button variant="primary" href={mailtoHref}>
                  <AiOutlineMail /> &nbsp; M’envoyer un e-mail
                </Button>
              </Col>
              <Col xs="auto" style={{ paddingBottom: "10px" }}>
                <Button variant="outline-light" onClick={copyEmail}>
                  <AiOutlineCopy /> &nbsp;{copyState === "copied"
                    ? "Copié"
                    : copyState === "failed"
                      ? "Échec de copie"
                      : "Copier l’e-mail"}
                </Button>
              </Col>
            </Row>

            {copyState === "failed" && (
              <p style={{ color: "white", marginTop: "10px" }}>
                Votre navigateur a bloqué l’accès au presse-papiers. Vous pouvez
                toujours m’écrire à{" "}
                <strong>{email}</strong>.
              </p>
            )}

            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              <Col xs="auto" className="social-icons">
                <a
                  href="https://github.com/ismail3080"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </Col>
              <Col xs="auto" className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismail-lichir-3858a4222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
