import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      This project was coded by{" "}
      <a
        href="https://subtle-malabi-26387a.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Alexandra Goilo
      </a>
      👩‍💻 and is {""}
      <a
        href="https://github.com/AlexaSheCodes/Weather-React"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
      {""} and {""}
      <a
        href="https://incomparable-scone-4841a9.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </p>
  );
}
