import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Master IoT & Systèmes embarqués (alternance)",
          "Support technique SAV & audiovisuel",
          "Systèmes embarqués, robotique et IoT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
