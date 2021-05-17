import React from "react";
import "./Home.css";

// renders homepage, given that user is not currently signed in

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    </div>
  );
}