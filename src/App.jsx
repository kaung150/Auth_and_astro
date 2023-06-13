import "./app.css";
import { Particle } from "./Particles";
import { motion } from "framer-motion";

import Hotline from "./components/Hotline";
import SideObjects1 from "./components/SideObjects1";
import SideObjects2 from "./components/SideObjects2";
import SideObjects3 from "./components/SideObjects3";
import Main from "./components/Main";
import SideObjects4 from "./components/SideObjects4";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A2D32] to-[#131313]  relative h-auto pb-10 container mx-auto">
      <Particle />
      <SideObjects1 />
      <Hotline />

      <SideObjects2 />
      <SideObjects3 />

      <div className="flex flex-col">
        <Main />
        <SideObjects4 />
      </div>
    </div>
  );
};

export default App;
