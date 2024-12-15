import { Project } from "../../types";

interface ProjectsProps {
  data: Project[];
}

function Projects({ data }: ProjectsProps) {
  return (
    <div className="space-y-4">
      {data.map((project, index) => (
        <div
          key={index}
          className="bg-white border-black pb-4 last:border-0 max-w-2xl"
        >
          <h3 className="font-dogica uppercase mb-2">{project.name}</h3>
          <p className="mb-2">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="bg-emerald-400 px-2 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="text-blue-600 hover:text-blue-800 text-sm mt-2 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
