import React from "react";
import Draggable from "react-draggable";
import systemDetails from "../SystemDetails.json";

interface WindowProps {
  title: string;
  section: keyof typeof systemDetails;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
}

function Window({ title, section, onClose, onFocus, zIndex }: WindowProps) {
  const renderContent = () => {
    const data = systemDetails[section];

    switch (section) {
      case "personalInfo":
        return (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <div className="font-bold">Name</div>
            <div>{(data as typeof systemDetails.personalInfo).name}</div>
            <div className="font-bold">Title</div>
            <div>{(data as typeof systemDetails.personalInfo).title}</div>
            <div className="font-bold">Location</div>
            <div>{(data as typeof systemDetails.personalInfo).location}</div>
            <div className="font-bold">Email</div>
            <div>{(data as typeof systemDetails.personalInfo).email}</div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-4">
            {Object.entries(data).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((item) => (
                    <span key={item} className="bg-slate-600 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div className="space-y-4">
            {(data as typeof systemDetails.experience).map((exp, index) => (
              <div
                key={index}
                className="border-b border-slate-600 pb-4 last:border-0"
              >
                <h3 className="font-bold">{exp.company}</h3>
                <p className="text-sm text-slate-300">{exp.position}</p>
                <p className="text-sm text-slate-400">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="space-y-4">
            {(data as typeof systemDetails.education).map((edu, index) => (
              <div key={index}>
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-sm text-slate-300">{edu.school}</p>
                <p className="text-sm text-slate-400">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        );

      case "projects":
        return (
          <div className="space-y-4">
            {(data as typeof systemDetails.projects).map((project, index) => (
              <div
                key={index}
                className="border-b-2 border-black pb-4 last:border-0"
              >
                <h3 className="font-dogica uppercase mb-2">{project.name}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-emerald-400 px-2 py-1 text-sm"
                    >
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

      case "interests":
        return (
          <div className="flex flex-wrap gap-2">
            {(data as string[]).map((interest) => (
              <span key={interest} className="bg-slate-600 px-2 py-1 rounded">
                {interest}
              </span>
            ))}
          </div>
        );

      case "languages":
        return (
          <div className="space-y-2">
            {(data as typeof systemDetails.languages).map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="text-slate-400">{lang.level}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Draggable handle=".window-header">
      <div
        className="absolute bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[600px]"
        style={{ zIndex }}
        onClick={onFocus}
      >
        <div className="window-header w-full bg-black text-white text-center font-dogica p-2 flex justify-between items-center cursor-move uppercase">
          <div className="w-4"></div>
          <div>{title}</div>
          <button
            className="bg-red-500 w-4 h-4 hover:bg-red-600 transition-colors flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ×
          </button>
        </div>
        <div className="p-4 font-dogica text-sm">{renderContent()}</div>
      </div>
    </Draggable>
  );
}

export default Window;
