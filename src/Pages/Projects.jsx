import React from "react";
import ProjectList from "../Components/ProjectList"; // Reusing the ProjectList component
import "./Pages.css";

export default function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>
      <ProjectList />
    </div>
  );
}
