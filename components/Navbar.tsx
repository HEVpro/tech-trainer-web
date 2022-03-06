/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  bg-[#C4C4C4] sm:h-16 lg:h-24">
      <div className="sm:ml-5 lg:ml-14">
        <a href="#">
          <img
            src="http://assets.stickpng.com/images/584a9b3bb080d7616d298777.png"
            alt="MK"
            className="sm:w-10 sm:h10 lg:w-16 lg:h-16"
          />
        </a>
      </div>

      <div className="flex justify-center space-x-5 content-center">
        <a
          href="#"
          className="bg-[#1F1C1D] text-[#F4F1ED] text-center w-48 h-7"
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
    </nav>
  );
};
