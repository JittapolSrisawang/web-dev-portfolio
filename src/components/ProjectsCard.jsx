import { FaGithubSquare, FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ url, img, github, title, text, tools }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="p-8">
        <h2 className="flex justify-center text-xl text-slate-800 tracking-wide font-medium capitalize">
          {title}
        </h2>
        <div className="text-section mt-4 leading-loose">{text}</div>
        <div className="flex justify-center mt-2">
          <p className="p-2 border-1 font-bold text-slate-500 shadow-md">
            {tools}
          </p>
        </div>
        <div className="mt-4 flex gap-x-4">
          <a href={url} title="Live Demo" target="_blank" rel="noreferrer">
            <FaGlobe className="h-8 w-8 text-slate-500 hover:text-bladk duration-300" />
          </a>
          <a href={github} title="Code" target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-bladk duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
