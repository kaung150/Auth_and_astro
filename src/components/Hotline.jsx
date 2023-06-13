import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Hotline = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <h1 className="text-[#E1FF3C] text-xl text-center mt-10 md:mt-0 md:text-2xl">
        <FontAwesomeIcon icon={faMessage} size="lg me-1" />
        <span> Did you find </span>
        <br className="md:hidden"></br> what you are looking for?
      </h1>
      <button className="text-[#E1FF3C] text-sm border border-[#E1FF3C] border-2  py-3 px-3 md:hover:bg-[#E1FF3C] md:hover:text-black md:hover:font-semibold ">
        HotLine +959123123123
      </button>
    </div>
  );
};

export default Hotline;
