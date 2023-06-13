import { motion } from "framer-motion";

const SideObjects4 = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between">
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
          <img src="images/flyingMeterior.svg" alt="" />
        </motion.div>

        <div className="flex items-start">
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: [0, 300, 0, -400, 0], // Specify the range of horizontal movement
              y: [0, 200, 0, -200, 0], // Specify the range of vertical movement
              rotate: [0, 90, 180, 270, 360], // Specify the range of rotation in degrees
              transition: {
                repeat: Infinity, // Repeat the animation infinitely
                duration: 5, // Duration of each animation cycle
                ease: "linear", // Use linear easing for smooth circular motion
              },
            }}
          >
            <img src="images/bottom right small meterior.svg" alt="" />
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
            <img src="images/half meterior3.svg" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SideObjects4;
