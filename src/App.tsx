import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Window from "./components/Window";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavClick={handleNavClick} />

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
  );
}

export default App;
