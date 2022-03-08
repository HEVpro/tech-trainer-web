/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div className="flex">
      <div className="">
        <h1 className=""></h1>
      </div>
      <div className=""></div>
      <div className="flex flex-col  ml-24">
        <div className=" bg-basico w-48 h-8 mb-9 mt-48 ">
          {" "}
          <h1>More than a club</h1>
        </div>
        <div className=" bg-basico-1 w-[37rem] h-52 top-96 left-24 mt-0.5  ">
          <p className="text-basico">
            All the field it is a cry we are the Blaugrana crowd. No matter
            where we come from whether from the south or the north now we agree,
            we agree, a flag unites us. Navy blue in the wind a brave cry we
            have a name everyone knows it: Barça, Barça, Barça! Players
            Followers all together we do strength. It's been a busy year, there
            are many goals we have scored and it has been shown, it has been
            shown, that no one will ever be able to twist us. Navy blue in the
            wind a brave cry we have a name everyone knows it: Barça, Barça,
            Barça!
          </p>
        </div>
        <div className=" bg-basico w-[37rem] h-32 top-[37rem] left-24 mt-5 ">
          {" "}
          <p>
            The philosophy consists of the application of total football mixed
            with a single traditional Spanish touch such as the tiqui-taca. This
            approach requires players to move fluidly in formation, where
            players can quickly swap positions.
          </p>
        </div>
        <div>
          <button className="bg-basico-2 w-72 h-14 top-[48rem] left-24 rounded-2xl mt-12">
            <a href="#">Become a member</a>
          </button>
          <button className="border-2 border-basico-2  w-48 h-14 top-[48rem] left-[25rem] rounded-2xl ml-5">
            <a href="#">Buy tickets</a>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="top-10 right-5">
          <div className="bg-basico-3 w-[58rem] h-[71rem] rounded-bl-[300px] absolute z-0 top-0 right-0"></div>
          <div className="bg-basico-1 w-[56rem] h-[48rem] absolute z-1 top-0 right-0 mt-20 mr-24">
            <img
              src="http://assets.stickpng.com/images/584a9b3bb080d7616d298777.png"
              alt=" eres del madrid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
