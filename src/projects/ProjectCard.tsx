import { Project } from "./Project";

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log("edit project", projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>
          Budget:{" "}
          {project.budget.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <button
          className="bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
};
