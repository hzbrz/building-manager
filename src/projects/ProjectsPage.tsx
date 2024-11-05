import { MOCK_PROJECTS } from "./MockProjects";

export const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, "")}</pre>
    </>
  );
};
