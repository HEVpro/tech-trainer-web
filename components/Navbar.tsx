/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <nav className="bg-[#C4C4C4] flex items-center justify-between h-24 ">
      <div className="ml-14">
        <a href="#">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQG5KBpL2YeNwA/company-logo_200_200/0/1646384462808?e=2147483647&v=beta&t=sPtKg5U3IOzKkyfkg0kMyShJNsKh1DoACq1LGanD_34"
            alt="MK"
            className="w-20 h-14"
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
        <button className="bg-[#FF9443] text-[#1F1C1D] w-48 h-12  rounded-2xl">
          <a href="#">Contact</a>
        </button>
      </div>
    </nav>
  );
};
