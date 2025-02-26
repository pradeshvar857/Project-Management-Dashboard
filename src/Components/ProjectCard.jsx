import React from "react";
import { CheckCircle, Clock } from "lucide-react";
import "./ProjectCard.css"; // Import CSS for styling

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.name}</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="milestones">
        {project.milestones.map((milestone, index) => (
          <div key={index} className="milestone">
            {milestone.completed ? (
              <CheckCircle color="green" size={18} />
            ) : (
              <Clock color="gray" size={18} />
            )}
            <span>{milestone.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
