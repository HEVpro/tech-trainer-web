import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#C4C4C4] sm:h-16 lg:h-24">
      <div className="hidden sm:block">
        <div className="sm:ml-5 lg:ml-14">
          <div className="w-12 mt-10">
            <FontAwesomeIcon icon={faCoffee} />
          </div>

        </div>
        <div className="flex justify-center space-x-5 content-center">
          <a
            href="#"
            className="bg-[#1F1C1D] text-[#F4F1ED] text-center h-7 w-24 sm:w-48 "
          >
            Project
          </a>
          <a
            href="#"
            className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7"
          >
            Technologies
          </a>
          <a
            href="#"
            className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7"
          >
            Communication
          </a>
        </div>
        <div className="mr-14">
          <button className="bg-[#FF9443] text-[#1F1C1D] w-48 h-12 rounded-2xl">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </nav>
  );
};
