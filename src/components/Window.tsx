import Draggable from "react-draggable";
import systemDetails from "../SystemDetails.json";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import {
  PersonalInfo,
  Skills as SkillsType,
  Experience as ExperienceType,
  Project,
} from "../types";

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
        return <AboutMe data={data as PersonalInfo} />;
      case "skills":
        return <Skills data={data as SkillsType} />;
      case "experience":
        return <Experience data={data as ExperienceType[]} />;
      case "projects":
        return <Projects data={data as Project[]} />;
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

      default:
        return null;
    }
  };

  return (
    <Draggable handle=".window-header">
      <div
        className="absolute bg-[#F5E6D3] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[600px]"
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
        <div className="p-8">{renderContent()}</div>
      </div>
    </Draggable>
  );
}

export default Window;
