import { MOCK_PROJECTS } from "./MockProjects";
import { ProjectList } from "./ProjectList";

export const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
};
