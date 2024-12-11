import textBookImage from "../assets/book-album-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";
import projectsIcon from "../assets/robot-svgrepo-com.svg";
import chatIcon from "../assets/chat-round-svgrepo-com.svg";
interface NavbarProps {
  onNavClick: (section: keyof typeof import("../SystemDetails.json")) => void;
}
function Navbar({ onNavClick }: NavbarProps) {
  return (
    <div className="items-center justify-between flex m-3 p-3 bg-black border border-white w-auto box-border">
      <div className="text-white font-dogica-bold">BURAK-OS</div>
      <div className="flex space-x-6 items-center">
        <div className="w-5 h-5">
          <button onClick={() => onNavClick("personalInfo")}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="w-5 h-5">
          <button onClick={() => onNavClick("experience")}>
            <img src={textBookImage} alt="" />
          </button>
        </div>
        <div className="w-5 h-5">
          <button onClick={() => onNavClick("projects")}>
            <img src={projectsIcon} alt="" />
          </button>
        </div>
        <div className="w-5 h-5">
          <button onClick={() => onNavClick("skills")}>
            <img src={chatIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
