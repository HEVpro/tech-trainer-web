export const Hero = () => {
  return (
    <div className="flex">
      <div className="">
        <h1 className=""></h1>
      </div>

      <div className=""></div>
      <div className="flex flex-col mt-10 ml-10">
        <div className=" bg-basico w-48 h-8 mb-9">A</div>
        <div className=" bg-basico-1 w-[37rem] h-52 top-96 left-24 ">B</div>
        <div className=" bg-basico w-[37rem] h-32 top-[37rem] left-24">C</div>
        <div>
          {" "}
          <button className="bg-basico-2 w-72 h-14 top-[48rem] left-24 rounded-2xl">
            {" "}
            boton 1{" "}
          </button>
          <button className="border-2 border-basico-2  w-48 h-14 top-[48rem] left-[25rem] rounded-2xl">
            boton 2
          </button>
        </div>
      </div>
      <div className="container">
        <div className="top-10 right-5">
          <div className="bg-basico w-[58rem] h-[71rem] rounded-bl-[50px] absolute z-0 top-0 right-0"></div>
          <div className="bg-basico-1 w-[48rem] h-[48rem] absolute z-1 top-0 right-0 "></div>
        </div>
      </div>
    </div>
  );
};
