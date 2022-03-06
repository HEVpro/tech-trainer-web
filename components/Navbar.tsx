export const Navbar = () => {
  return (
    <nav className="bg-[#C4C4C4] flex items-center justify-between h-24 ">
      <div className="flex items-center ml-14 border-2 border-black">
        <a href="#" className="content-center text-center w-20 h-12">
          MK
        </a>
      </div>

      <div className="flex justify-center space-x-20 content-center">
        <a
          href="#"
          className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7 rounded"
        >
          Project
        </a>

        <a
          href="#"
          className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7 rounded"
        >
          Technologies
        </a>

        <a
          href="#"
          className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7 rounded"
        >
          Communication
        </a>
      </div>

      <div className="flex justify-end items-center mr-14">
        <a href="#">
          <button className="bg-[#FF9443] text-[#1F1C1D] w-48 h-12  rounded-2xl">
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
};
