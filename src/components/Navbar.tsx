import textBookImage from "../assets/book-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";

function Navbar() {
  return (
    <div className="items-center justify-between flex m-3 p-3 bg-black border border-white w-auto box-border">
      <div className="text-white font-dogica-bold">BURAK-OS</div>
      <div className="flex space-x-6 items-center">
        <div className="w-6 h-6">
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="w-8 h-8">
          <button>
            <img src={textBookImage} alt="" />
          </button>
        </div>
        <div className="w-4 h-4 bg-white"></div>
        <div className="w-4 h-4 bg-white"></div>
      </div>
    </div>
  );
}

export default Navbar;
