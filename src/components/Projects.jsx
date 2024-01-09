import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div id="projects" className=" bg-slate-100">
      <div className="align-element">
        <div data-aos='fade-up' className="title-section">Projects</div>
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
