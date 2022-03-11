import Image from "next/image";
export const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col  lg:ml-20">
        <div className=" bg-secondary-grey w-[10rem] h-8 ml-5 mt-[22rem]  lg:w-38 lg:h-8 lg:mb-9 lg:mt-48 lg:px-4 ">
          {" "}
          <h1>More than a club</h1>
        </div>
        <div className=" bg-secondary-black w-[21rem] h-44 mt-4 ml-5 lg:w-[31.5rem] lg:h-52 py-4 px-4">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
            at voluptatem a dolorum corrupti dolores, eius tempore ipsum culpa
            facilis sapiente, est ab deserunt nemo placeat deleniti, maxime
            ipsam.
          </p>
        </div>
        <div className=" bg-secondary-grey w-[21rem] h-32 ml-5 lg:w-[31.5rem] lg:h-32 top-[37rem] left-24 mt-5 py-4 px-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
            at voluptatem a dolorum corrupti dolores, eius tempore ipsum culpa
          </p>
        </div>
        <div>
          <button className="bg-accent w-40 h-8 mt-10 ml-5 lg:w-72 lg:h-14  lg:left-24 rounded-2xl lg:mt-12">
            <a href="#">Become a member</a>
          </button>
          <button className="border-2 border-accent w-24 h-8 lg:w-48 lg:h-14 top-[48rem] left-[25rem] rounded-2xl ml-5">
            <a href="#">Buy tickets</a>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="bg-primary hidden lg:block lg:w-[44rem] h-[51rem] rounded-bl-[300px] absolute top-0 right-0 z-0"></div>
        <div className="bg-secondary-black w-64 h-64 mr-16 mt-16 lg:w-[46rem] lg:h-[40.5rem] lg:mt-20 lg:mr-24 absolute top-0 right-0 z-2"></div>
      </div>
    </div>
  );
};
