import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Window from "./components/Window";
import textBookImage from "./assets/book-album-svgrepo-com.svg";
import searchIcon from "./assets/search-svgrepo-com.svg";
import projectsIcon from "./assets/robot-svgrepo-com.svg";
import chatIcon from "./assets/chat-round-svgrepo-com.svg";

interface WindowState {
  id: keyof typeof import("./SystemDetails.json");
  isOpen: boolean;
  zIndex: number;
}

function App() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "personalInfo", isOpen: false, zIndex: 0 },
    { id: "skills", isOpen: false, zIndex: 0 },
    { id: "experience", isOpen: false, zIndex: 0 },
    { id: "education", isOpen: false, zIndex: 0 },
    { id: "projects", isOpen: false, zIndex: 0 },
    { id: "interests", isOpen: false, zIndex: 0 },
    { id: "languages", isOpen: false, zIndex: 0 },
  ]);
  const [maxZIndex, setMaxZIndex] = useState(0);

  const desktopIcons = [
    { id: "personalInfo" as const, icon: searchIcon, label: "About Me" },
    { id: "experience" as const, icon: textBookImage, label: "Experience" },
    { id: "projects" as const, icon: projectsIcon, label: "Projects" },
    { id: "skills" as const, icon: chatIcon, label: "Skills" },
  ];

  const handleNavClick = (windowId: WindowState["id"]) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === windowId ? { ...window, isOpen: !window.isOpen } : window
      )
    );
  };

  const handleClose = (windowId: WindowState["id"]) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === windowId ? { ...window, isOpen: false } : window
      )
    );
  };

  const bringToFront = (windowId: WindowState["id"]) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) =>
      prev.map((window) =>
        window.id === windowId ? { ...window, zIndex: newZIndex } : window
      )
    );
  };

  const getWindowTitle = (id: WindowState["id"]) => {
    const titles: Record<WindowState["id"], string> = {
      personalInfo: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      interests: "Interests",
      languages: "Languages",
    };
    return titles[id];
  };

  const handleIconDoubleClick = (windowId: WindowState["id"]) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === windowId ? { ...window, isOpen: true } : window
      )
    );
    bringToFront(windowId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavClick={handleNavClick} />

      <div className="flex-1 relative">
        <div className="absolute top-4 left-4 flex flex-col gap-4">
          {desktopIcons.map((icon) => (
            <button
              key={icon.id}
              className="flex flex-col items-center gap-1 text-white hover:bg-white/10 p-2 rounded w-20"
              onClick={() => handleIconDoubleClick(icon.id)}
            >
              <img src={icon.icon} alt="" className="w-8 h-8" />
              <span className="text-xs font-dogica-bold text-center">
                {icon.label}
              </span>
            </button>
          ))}
        </div>

        {windows.map(
          (window) =>
            window.isOpen && (
              <Window
                key={window.id}
                title={getWindowTitle(window.id)}
                section={window.id}
                onClose={() => handleClose(window.id)}
                onFocus={() => bringToFront(window.id)}
                zIndex={window.zIndex}
              />
            )
        )}
      </div>
    </div>
  );
}

export default App;
