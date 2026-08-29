import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Jours où je <strong className="purple">code</strong>
      </h1>
      <GitHubCalendar
        username="ismail3080"
        blockSize={15}
        blockMargin={5}
        color="#e7b92d"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
