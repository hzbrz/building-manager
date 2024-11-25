import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import { ProjectList } from "./ProjectList";

export const ProjectsPage = () => {
  const saveProject = (project: Project) => {
    console.log("Project being saved: ", project);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
    </>
  );
};
