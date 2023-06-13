import { motion } from "framer-motion";
const SideObjects3 = () => {
  return (
    <div>
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
        <img src="images/second half.svg" alt="" className="absolute" />
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
      </motion.div>
    </div>
  );
};

export default SideObjects3;
