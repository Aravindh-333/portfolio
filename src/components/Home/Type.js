import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analytics Trainee",
          "Junior Data Analyst",
          "Software Engineer",
          "Developer",
          "PowerBi Developer",
          "Data Scientist",
          "Freelancer..."
          ,
          
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
