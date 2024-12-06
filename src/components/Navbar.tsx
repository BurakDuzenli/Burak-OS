import React from "react";
import textBookImage from "../assets/book-album-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";
import projectsIcon from "../assets/robot-svgrepo-com.svg";
import chatIcon from "../assets/chat-round-svgrepo-com.svg";
function Navbar() {
  function SystemDetails(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {}

  return (
    <div className="items-center justify-between flex m-3 p-3 bg-black border border-white w-auto box-border">
      <div className="text-white font-dogica-bold">BURAK-OS</div>
      <div className="flex space-x-6 items-center">
        <div className="w-5 h-5">
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="w-5 h-5">
          <button onClick={SystemDetails}>
            <img src={textBookImage} alt="" />
          </button>
        </div>
        <div className="w-5 h-5">
          <button>
            <img src={projectsIcon} alt="" />
          </button>
        </div>
        <div className="w-5 h-5 ">
          <button>
            <img src={chatIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
