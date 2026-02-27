import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "M.Sc. IoT & Embedded Systems (Apprenticeship)",
          "Embedded Systems & Robotics",
          "IoT Prototyping (ESP32/STM32)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
