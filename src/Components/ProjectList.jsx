import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectList.css"; // Import CSS for styling

const projectsData = [
  {
    id: 1,
    name: "Website Redesign",
    progress: 70,
    milestones: [
      { name: "Design Phase", completed: true },
      { name: "Development Phase", completed: true },
      { name: "Testing Phase", completed: false },
    ],
  },
  {
    id: 2,
    name: "Mobile App Launch",
    progress: 40,
    milestones: [
      { name: "Wireframing", completed: true },
      { name: "Backend Development", completed: false },
      { name: "User Testing", completed: false },
    ],
  },
];

export default function ProjectList() {
  const [projects] = useState(projectsData);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
