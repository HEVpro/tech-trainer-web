import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between bg-white w-full h-24  ">
      <div className="ml-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/594/594311.png"
          alt=""
          width={64}
          height={64}
        />
      </div>

      <div>
        <div className="flex justify-center text-lg ">
          <button className=" mx-5">
            <h1 className=" text-orange-600">HOME</h1>
          </button>
          <button className=" mx-5">
            <h1>PAGES</h1>
          </button>
          <button className=" mx-5">
            <h1>PORTFOLIO</h1>
          </button>
          <button className=" mx-5">
            <h1>BLOG</h1>
          </button>
          <button className=" mx-5">
            <h1>CONTACT US</h1>
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-10 text-xl">
        <button className="mx-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className="">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};
