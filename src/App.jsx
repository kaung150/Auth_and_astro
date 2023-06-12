import { useStateContext } from "./contexts/ContextProvider";
import "./app.css";

const App = () => {
  const { image } = useStateContext();
  return (
    <div className="bg-gradient-to-b from-[#2A2D32] to-[#131313]  relative h-screen md:h-auto">
      <div className="flex justify-between items-start ">
        <img
          src="images/meteror half.svg"
          className="hidden md:block mt-10"
          alt=""
        />
        <img
          src="images/Untitled design (49) 4.svg"
          className="hidden md:block me-10 "
          alt=""
        />
      </div>
      <div className="flex justify-around ">
        <img src="images/planet.svg" alt="" width={100} />
        <img src="images/satellite.svg" alt="" width={100} />
      </div>
      <div className="flex flex-col items-center mt-6 container gap-5 ">
        <h1 className="text-[#E1FF3C] text-2xl text-center">
          <span> Did you find </span>
          <br className="md:hidden"></br> what you are looking for?
        </h1>
        <button className="text-[#E1FF3C] text-sm border border-[#E1FF3C] border-2  py-3 px-3 md:hover:bg-[#E1FF3C] md:hover:text-black md:hover:font-semibold">
          HotLine +959123123123
        </button>
      </div>
      <div className="text-center font-semibold mt-10">
        <h1 className="text-white text-5xl">Trust From Customers</h1>
        <p className="text-white mt-3">
          Join our 1000+ Happy <br />
          Customers
        </p>
      </div>
      <div class="block glow"></div>
    </div>
  );
};

export default App;
