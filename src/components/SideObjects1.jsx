import React from "react";
import { motion } from "framer-motion";

const SideObjects1 = () => {
  return (
    <div className="flex justify-between items-start">
      <motion.div
        animate={{
          y: [-20, 20], // Specify the range of vertical movement
          transition: {
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse",
            duration: 1.5, // Duration of each animation cycle
          },
        }}
      >
        <img
          src="images/meteror half.svg"
          className="hidden md:block mt-10"
          alt=""
          width={130}
          height={130}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [-20, 20], // Specify the range of vertical movement
          transition: {
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse",
            duration: 1.5, // Duration of each animation cycle
          },
        }}
      >
        <img
          src="images/Untitled design (49) 4.svg"
          className="hidden md:block me-10 "
          alt=""
          width={130}
          height={130}
        />
      </motion.div>
    </div>
  );
};

export default SideObjects1;
