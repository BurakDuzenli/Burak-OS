import React from "react";
import textBookImage from "../assets/book-svgrepo-com.svg";

function Navbar() {
  return (
    <div className="py-10">
      <div className=" flex justify-around">
        <div className="text-5xl font-dogica-bold text-white"> Burak-OS </div>
        <div>
          <img className=" size-16 " src={textBookImage} alt="about me" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
