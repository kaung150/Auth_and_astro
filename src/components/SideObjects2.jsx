import { motion } from "framer-motion";

const SideObjects2 = () => {
  return (
    <div className="flex justify-around ">
      <motion.div
        animate={{
          rotate: [0, 360], // Specify the range of rotation in degrees
          transition: {
            repeat: Infinity, // Repeat the animation infinitely
            duration: 3, // Duration of each animation cycle
            ease: "linear", // Use linear easing for smooth circular motion
          },
        }}
      >
        <img
          src="images/planet.svg"
          alt=""
          width={100}
          className="md:w-[200px]"
        />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360], // Specify the range of rotation in degrees
          transition: {
            repeat: Infinity, // Repeat the animation infinitely
            duration: 3, // Duration of each animation cycle
            ease: "linear", // Use linear easing for smooth circular motion
          },
        }}
      >
        <img
          src="images/satellite.svg"
          alt=""
          width={100}
          className="md:w-[200px]"
        />
      </motion.div>
    </div>
  );
};

export default SideObjects2;
