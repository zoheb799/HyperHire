import React from "react"
import { motion } from "framer-motion"
import MonitorIcon from "@/public/svgs/monitor";
import CallIcon from "@/public/svgs/call";
import StarIcon from "@/public/svgs/star";
import CubeIcon from "@/public/svgs/cubeIcon";
import GalleryIcon from "@/public/svgs/gallery";

const OptionsList: React.FC = () => {
  const services = [
    { icon: <MonitorIcon />, label: "해외 마케팅" },
    { icon: <GalleryIcon />, label: "퍼블리셔" },
    { icon: <CubeIcon />, label: "캐드원(제도사)" },
    { icon: <StarIcon />, label: "해외 세일즈" },
    { icon: <CallIcon />, label: "해외 CS" },
  ];

  return (
    <div className=" hidden w-full py-4  lg:flex justify-center ">
      <div className="flex gap-4 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white bg-opacity-20 p-3 rounded-lg text-white hover:bg-opacity-30 transition w-[332px] h-[92px]"
            initial={{ opacity: 0, x: 50 }} // Starts from a 50px to the right and invisible
            animate={{ opacity: 1, x: 0 }} // Fades in and slides to its normal position
            transition={{
              delay: index * 0.3, // Delay for each item to appear sequentially
              duration: 0.5, // Duration of the animation
            }}
          >
            <div className="h-14 w-14 rounded-lg justify-center items-center flex bg-cyan-300 opacity-90">
              <span className="text-2xl">{service.icon}</span>
            </div>
            <span className="text-lg">{service.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OptionsList;
