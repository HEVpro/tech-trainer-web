import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pipeline } from "stream";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="flex w-full ">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full z-0">
          <Image width={1800} height={900} src="/photos/bathroom.jpg" alt="" />
        </div>
        <div className="bg-black opacity-50 absolute top-0 left-0 z-20 w-full "></div>
        <div className="flex items-center justify-between  z-50">
          <div className="text-white z-20  mt-[12rem] ml-[8rem] w-[110ch]  ">
            <h1 className="text-9xl">The Simple Way Of Architecture</h1>
          </div>
          <div className="flex flex-col  font-title absolute z-20 rotate-90 right-0 top-72 w-[60ch] ">
            <h1 className="text-white text-xl   ">
              Interior Desing From the
              <p className=" ml-56 border-1 border-b-4 border-white"></p>
              <p className="text-orange-600"> India.</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
