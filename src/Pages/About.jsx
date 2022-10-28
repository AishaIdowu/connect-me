import React from "react";
import Navbar from "../components/Navbar";
import "./Page.css";

function About() {
  return (
    <div className="About">
      <Navbar />
      <div className="Container">
      <h1>About</h1>
      <p>
        Networking is not about just connecting people. It is about connecting
        people with people, people with ideas, and people with ideas, and people
        with opprtunities
      </p>
      <cite>--Michele Jennae</cite>
      <p>This is an app to coonect you with </p>
      </div>
      
    </div>
  );
}

export default About;
