import React from "react";
import Image from "next/image";
import LOGO from "../public/400x400.png";
import PFP from "../public/300.png";

function About() {
  return (
    <div className="about-me">
      <h1>
        <span className="nice">1. </span>About me
      </h1>
      <div className="text">
        <div className="more-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel sapien aliquam, mollis ligula ac, eleifend sapien. Praesent
            feugiat, nisl id ornare dictum, urna odio luctus erat, non efficitur
            libero enim in odio. Aliquam vitae sapien quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel sapien aliquam, mollis ligula ac, eleifend sapien. Praesent
            feugiat, nisl id ornare dictum, urna odio luctus erat, non efficitur
            libero enim in odio. Aliquam vitae sapien quam.
          </p>
        </div>
        <Image src={PFP} alt="Picture of the author" />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="smt">
          <h2>35% Blender</h2>
          <div className="border">
            <div className="progress-blender"></div>
          </div>
        </div>
        <div className="smt">
          <h2>80% Fusion</h2>
          <div className="border">
            <div className="progress-fusion"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
