import { useState } from "react";
import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./ProjectForm";

interface projectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

export const ProjectList = ({ projects, onSave }: projectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <ul className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm onCancel={cancelEditing} onSave={onSave} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
          )}
        </div>
      ))}
    </ul>
  );
};
