export const Navbar = () => {
  return (
    <nav className="bg-[#C4C4C4] flex items-center justify-between h-24 ">
      <div className="flex items-center ml-14 border-2 border-black">
        <p className="content-center text-center w-20 h-12">
          <a href="#">MK</a>
        </p>
      </div>

      <div>
        <ul className="flex justify-center space-x-20 content-center">
          <li className="bg-[#1F1C1D] text-[#F4F1ED] hover:bg-[#FF9443] hover:text-[#1F1C1D] active:bg-[#1F1C1D] active:text-[#F4F1ED] text-center w-48 h-7 rounded">
            <a href="#">Project</a>
          </li>
          <li className="bg-[#1F1C1D] text-[#F4F1ED] hover:bg-[#FF9443] hover:text-[#1F1C1D] active:bg-[#1F1C1D] active:text-[#F4F1ED] text-center w-48 h-7 rounded">
            <a href="#">Technologies</a>
          </li>
          <li className="bg-[#1F1C1D] text-[#F4F1ED] hover:bg-[#FF9443] hover:text-[#1F1C1D] active:bg-[#1F1C1D] active:text-[#F4F1ED] text-center w-48 h-7 rounded">
            <a href="#">Communication</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-end items-center mr-14">
        <a href="#">
          <button className="bg-[#FF9443] text-[#1F1C1D] hover:bg-[#1F1C1D] hover:text-[#F4F1ED] active:bg-[#FF9443] active:text-[#1F1C1D] w-48 h-12  rounded-2xl">
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
};
