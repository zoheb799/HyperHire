"use client";
import React, { useState } from "react";
import "../styles/global.css";
import Navbar from "./components/organisms/Navbar";
import PrevIcon from "@/public/svgs/prev";
import NextIcon from "@/public/svgs/next";
import GuptaIcon from "@/public/svgs/gupta";
import Tooltip from "./components/atoms/Tooltip";
import Dollar from "@/public/svgs/dollar";
import OptionsList from "./components/molecules/OptionsList";
import { motion } from "framer-motion";
import GupttaIcon from "@/public/svgs/guptaIcon2";
import CorrectIcon from "@/public/svgs/correctIcon";

interface CardData {
  id: string;
  name: string;
  title: string;
  experience: string;
  skills: string[];
  imageUrl: string;
  countryFlag?: string;
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const userData: CardData[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Full Stack Developer",
    experience: "5 years",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    imageUrl: "/images/gupta.png",
    countryFlag: "/images/usa_flag.png",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Backend Developer",
    experience: "3 years",
    skills: ["Python", "Django", "PostgreSQL"],
    imageUrl: "/images/gupta.png",
    countryFlag: "/images/uk_flag.png",
  },
  {
    id: "3",
    name: "Jane Smith",
    title: "Backend Developer",
    experience: "3 years",
    skills: ["Python", "Django", "PostgreSQL"],
    imageUrl: "/images/gupta.png",
    countryFlag: "/images/uk_flag.png",
  },
];
const languageSkills = [
  "한국어 능력 1",
  "한국어 능력 2",
  "한국어 능력 3",
  "한국어 능력 4",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? userData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-[60.0625rem] bg-custom-gradient">
      <Navbar />
      <div>
        <div className=" hidden p-20  lg:flex items-center justify-center text-white">
          {/* Content Section */}

          <div className="flex flex-col justify-start items-start">
            {/* Title Section */}
            <div className="text-start lg:text-left mb-10">
              <motion.div
                className="mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Tooltip
                  bgColor="bg-white"
                  textColor="text-[#40E2E8]"
                  pointerPosition={15}
                >
                  풀타임, 파트타임
                </Tooltip>
              </motion.div>
              {/* FadeIn after title and subtitle shown (delay 300ms) */}

              <motion.h1
                className="text-3xl md:text-5xl font-black mb-4 leading-snug"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
              </motion.h1>
              {/* FadeInUp (duration 500ms) */}

              <motion.p
                className="text-3xl font-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
                채용해보세요.
              </motion.p>
              {/* FadeInUp (500ms) */}

              <motion.a
                href="#"
                className="py-3 text-white font-semibold rounded-md underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                개발자가 필요하신가요?
              </motion.a>
            </div>

            {/* Information Cards Section */}

            <motion.div
              className="flex justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Card 1 */}
              <motion.div
                className="text-white rounded-lg pt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-1 bg-white border mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">평균 월 120만원</h2>
                <p className="text-sm">
                  임금을 해당 국가를 기준 <br /> 으로 계산합니다.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="text-white rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-1 bg-white border mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">
                  최대 3회 인력교체
                </h2>
                <p className="text-sm">
                  막상 채용해보니 맞지 않 <br />
                  아도 걱정하지 마세요.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="text-white rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-1 bg-white border mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">
                  평균 3일, 최대 10일
                </h2>
                <p className="text-sm">
                  급하게 사람이 필요한 경 <br />
                  우에도 빠른 채용이 가능 <br />
                  합니다.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Image/Card Carousel Section */}
          <div className="relative w-[36%] max-w-full flex items-center justify-center">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrev}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <PrevIcon />
            </motion.button>

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {userData.map((user, index) => {
                const isCurrent = index === currentIndex;
                const isNext = index === (currentIndex + 1) % userData.length;
                const isPrev =
                  index ===
                  (currentIndex - 1 + userData.length) % userData.length;

                return (
                  <motion.div
                    key={index}
                    className={`absolute max-w-sm transition-transform duration-500 ease-in-out transform mb-16 ${
                      isCurrent
                        ? "z-20 scale-100 translate-y-0"
                        : isNext
                        ? "z-10 scale-90 translate-x-[45%] translate-y-8 opacity-90"
                        : isPrev
                        ? "z-10 scale-90 -translate-x-[45%] translate-y-8 opacity-90"
                        : "opacity-0"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Tooltip */}
                    {isCurrent && (
                      <motion.div
                        className="mb-5 justify-center text-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                      >
                        <Tooltip
                          bgColor="bg-white"
                          textColor="text-[#00C696]"
                          pointerPosition={50}
                        >
                          <div className="flex justify-around items-center">
                            <Dollar />
                            <p className="font-black text-lg leading-7">
                              월100만원
                            </p>
                          </div>
                        </Tooltip>
                      </motion.div>
                    )}

                    {/* Card Content */}
                    <motion.div
                      className="bg-white rounded-lg shadow-lg text-center w-[292px] h-[408px] flex flex-col justify-between py-6 px-4"
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Top Section */}
                      <div className="flex flex-col items-center space-y-4">
                        <div className="flex justify-center items-center w-24 h-24 rounded-full object-cover bg-[#f0f4f8]">
                          <GuptaIcon />
                        </div>
                        <h3 className="text-gray-800 font-extrabold text-2xl leading-9">
                          Abhishek Gupta
                        </h3>
                        <p className="text-base font-bold text-[#4A77FF] mb-4 leading-6">
                          마케팅.{" "}
                          <span className="text-base font-bold text-[#4A77FF] leading-6">
                            2y+
                          </span>
                        </p>
                      </div>

                      {/* Spacer for middle gap */}
                      <div className="flex-grow"></div>

                      {/* Bottom Section */}
                      <div className="flex flex-col items-center space-y-2">
                        <p className="w-max h-[32px] rounded-[6px] border p-[4px_12px] text-[#5E626F]">
                          마케팅 콘텐츠 제작
                        </p>
                        <p className="w-max h-[32px] rounded-[6px] border p-[4px_12px] text-[#5E626F]">
                          인스타그램 관리
                        </p>
                        <div className="flex space-x-2">
                          <p className="w-max h-[32px] rounded-[6px] border p-[4px_12px] text-[#5E626F]">
                            트위터 관리
                          </p>
                          <p className="w-max h-[32px] rounded-[6px] border p-[4px_12px] text-[#5E626F]">
                            블로그 글 작성
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <NextIcon />
            </motion.button>
          </div>
        </div>

        <OptionsList />
      </div>

      {/* mobile view */}
      <div className=" flex justify-center lg:hidden">
        <div className="flex flex-col justify-evenly items-center">
          {/* Title Section */}
          <div className=" p-5 text-start lg:text-left mb-10">
            <motion.div
              className="mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tooltip
                bgColor="bg-[#8BC4FF]"
                textColor="text-white"
                pointerPosition={15}
              >
                풀타임, 파트타임
              </Tooltip>
            </motion.div>
            {/* FadeIn after title and subtitle shown (delay 300ms) */}

            <motion.h1
              className="text-4xl text-white font-black mb-4 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계<br />
              신가요?
            </motion.h1>
            {/* FadeInUp (duration 500ms) */}

            <motion.p
              className="text-lg font-black leading-6 text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              법률 및 인사관리 부담없이 1주일 이내에 원격 <br />
              으로 채용해보세요.
            </motion.p>
            {/* FadeInUp (500ms) */}
          </div>

          <div className="relative  w-[100%] flex items-center justify-center pt-24">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrev}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <PrevIcon />
            </motion.button>

            {/* Carousel Container */}
            <div className="relative w-[87%]  h-full flex items-center justify-center">
              {userData.map((user, index) => {
                const isCurrent = index === currentIndex;
                const isNext = index === (currentIndex + 1) % userData.length;
                const isPrev =
                  index ===
                  (currentIndex - 1 + userData.length) % userData.length;

                return (
                  <motion.div
                    key={index}
                    className={`absolute w-[230px] h-[311px] max-w-sm transition-transform duration-500 ease-in-out transform mb-16 ${
                      isCurrent
                        ? "z-20 scale-100 translate-y-0"
                        : isNext
                        ? "z-10 scale-90 translate-x-[20%] translate-y-16 opacity-90"
                        : isPrev
                        ? "z-10 scale-90 -translate-x-[20%] translate-y-16 opacity-90"
                        : "opacity-0"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Tooltip */}
                    {isCurrent && (
                      <motion.div
                        className="mb-5 justify-center text-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                      >
                        <Tooltip
                          bgColor="bg-white"
                          textColor="text-[#00C696]"
                          pointerPosition={50}
                        >
                          <div className="flex justify-around items-center">
                            <Dollar />
                            <p className="font-black text-lg leading-7">
                              월100만원
                            </p>
                          </div>
                        </Tooltip>
                      </motion.div>
                    )}

                    {/* Card Content */}
                    <motion.div
                      className="bg-white rounded-lg shadow-lg text-center flex flex-col justify-between py-6 px-4"
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Top Section */}
                      <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center  rounded-full object-cover ">
                          <GupttaIcon />
                        </div>
                        <h3 className="text-gray-800 font-extrabold text-lg leading-7">
                          Abhishek Gupta
                        </h3>
                        <p className="text-base font-bold text-[#4A77FF] mb-4 leading-6">
                          마케팅.{" "}
                          <span className="text-base font-bold text-[#4A77FF] leading-6">
                            2y+
                          </span>
                        </p>
                      </div>

                      {/* Spacer for middle gap */}
                      <div className="flex-grow"></div>

                      {/* Bottom Section */}
                      <div className="flex flex-col items-center space-y-2">
                        <p className="w-max h-[29px] rounded-[6px] border p-[4px_12px] text-[#5E626F] text-sm font-black leading-[21px]">
                          마케팅 콘텐츠 제작
                        </p>
                        <p className="w-max h-[29px] rounded-[6px] border p-[4px_12px] text-[#5E626F] text-sm font-black leading-[21px]">
                          인스타그램 관리
                        </p>
                        <div className="flex space-x-2">
                          <p className="w-max h-[29px] rounded-[6px] border p-[4px_12px] text-[#5E626F] text-sm font-black leading-[21px]">
                            트위터 관리
                          </p>
                          <p className="w-max h-[29px] rounded-[6px] border p-[4px_12px] text-[#5E626F] text-sm font-black leading-[21px]">
                            블로그 글 작성
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <NextIcon />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-44 pr-24">
            {languageSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex justify-center items-center gap-2 h-6`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }} // Adding staggered delay for each item
              >
                <div className="bg-[#E8ECFF] rounded-md">
                  <CorrectIcon />
                </div>
                <p className="text-base font-black leading-6 text-[#FFFFFF]">{skill}</p>
              </motion.div>
            ))}
            
          </div>
          <motion.a
              href="#"
              className="py-3 text-[#FBFF23] font-semibold rounded-md underline pr-44"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              개발자가 필요하신가요?
            </motion.a>
        </div>
      </div>
    </div>
  );
}
