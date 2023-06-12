import { useStateContext } from "./contexts/ContextProvider";
import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMessage } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A2D32] to-[#131313]  relative h-auto pb-10 container mx-auto">
      <div className="flex justify-between items-start">
        <img
          src="images/meteror half.svg"
          className="hidden md:block mt-10"
          alt=""
          width={130}
          height={130}
        />
        <img
          src="images/Untitled design (49) 4.svg"
          className="hidden md:block me-10 "
          alt=""
          width={130}
          height={130}
        />
      </div>
      <div className="flex flex-col items-center   gap-5 ">
        <h1 className="text-[#E1FF3C] text-xl text-center mt-10 md:mt-0 md:text-2xl">
          <FontAwesomeIcon icon={faMessage} size="lg me-1" />
          <span> Did you find </span>
          <br className="md:hidden"></br> what you are looking for?
        </h1>
        <button className="text-[#E1FF3C] text-sm border border-[#E1FF3C] border-2  py-3 px-3 md:hover:bg-[#E1FF3C] md:hover:text-black md:hover:font-semibold">
          HotLine +959123123123
        </button>
      </div>
      <div className="flex justify-around ">
        <img src="images/planet.svg" alt="" width={100} />
        <img src="images/satellite.svg" alt="" width={100} />
      </div>

      <div>
        <img src="images/second half.svg" alt="" className="absolute" />
        <div>
          <img
            src="images/small meterior 1.svg"
            alt=""
            className="right-0 absolute"
          />
          <img
            src="images/small meterior 2.svg"
            alt=""
            className="right-0 absolute"
          />
          <img
            src="images/small meterior 3.svg"
            alt=""
            className="right-0 absolute mt-40"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-center font-semibold mt-20">
          <h1 className="text-white text-5xl">Trust From Customers</h1>
          <p className="text-white mt-3">
            Join our 1000+ Happy <br />
            Customers
          </p>
        </div>

        <div className="text-white text-center px-6 py-4 mx-6 border mt-10 md:mx-80 border-[#E1FF3C]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat amet repellendus reiciendis, repudiandae harum aspernatur,
            vero voluptas voluptatem officia recusandae. Eos eum, eligendi odit
            doloribus maxime velit perferendis veritatis.
          </p>

          <div className="flex justify-between mt-4">
            <span>David Kaung</span>
            <div>
              <FontAwesomeIcon icon={faStar} color="yellow" />
              <FontAwesomeIcon icon={faStar} color="yellow" />
              <FontAwesomeIcon icon={faStar} color="yellow" />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>

        <dir className="hidden md:block">
          <dir className="flex justify-between">
            <img src="images/flyingMeterior.svg" alt="" />

            <div className="flex items-start">
              <img src="images/bottom right small meterior.svg" alt="" />
              <img src="images/half meterior3.svg" alt="" />
            </div>
          </dir>
        </dir>
      </div>
    </div>
  );
};

export default App;
