import React, { useEffect, useState } from "react";
import LOGOFOO from "../../../public/svgs/logoFooter";
import CodeIcon from "@/public/svgs/code";
import ProfileIcon from "@/public/svgs/profile";
import KORIcon from "@/public/svgs/kor";
import SettingIcon from "@/public/svgs/setting";
import ArrowIcon from "@/public/svgs/arrow";
import { fetchUserData } from "@/utils/apiClients";

const services = [
  {
    label: "해외 개발자 원격 채용",
    icon: <CodeIcon />,
    link: "#",
  },
  {
    label: "외국인 원격 채용 (비개발)",
    icon: <ProfileIcon />,
    link: "#",
  },
  {
    label: "한국어 가능 외국인 채용",
    icon: <KORIcon />,
    link: "#",
  },
  {
    label: "해외 개발자 활용 서비스",
    icon: <SettingIcon />,
    link: "#",
  },
];

export const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const getFooterData = async () => {
      const data = await fetchUserData();
      setFooterData(data);
    };

    getFooterData();
  }, []);

  return (
    <footer className="bg-[#FBFBFB] py-10 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto space-y-10 p-5">
        {/* Logo and Contact Information */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-start">
          {/* Logo Section */}
          <div className="flex flex-col items-start text-start">
            <LOGOFOO />
            <p className="mt-2 text-sm font-black text-[#343741]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해 <br />드립니다.
            </p>
            <div className="mt-4 text-sm font-black text-[#5E626F] space-y-1 ">
              <p>010-0000-0000</p>
              <p>aaaaaa@naver.com</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg  flex flex-col items-center"
              >
                <span className="text-3xl">{service.icon}</span>
                <p className="mt-2 font-black text-sm text-[#343741]">
                  {service.label}
                </p>
                <a
                  href={service.link}
                  className="font-black text-sm text-[#5E626F] flex items-center mt-2 gap-1"
                >
                  바로가기 <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info and Address */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
  {/* Smallest to lg view: Parent in Flex, First Two Divs in Flex Row, Last Two in Flex Column */}
  <div className="flex flex-col gap-6 lg:flex-row lg:w-full">
    {/* First two divs in a row */}
    <div className="flex flex-wrap gap-6 lg:flex-nowrap lg:w-1/2">
      {/* Company Name */}
      <div className="flex-1">
        <p className="font-black text-xs text-[#343741]">상호명</p>
        <p className="text-[#5E626F] font-black text-sm">하이퍼하이어</p>
        <p className="text-[#5E626F] font-black text-sm">Hyperhire India Private Limited</p>
      </div>

      {/* CEO */}
      <div className="flex-1">
        <p className="font-black text-xs text-[#343741]">대표 CEO</p>
        <p className="text-[#5E626F] font-black text-sm">김주현</p>
        <p className="text-[#5E626F] font-black text-sm">Juhyun Kim</p>
      </div>
    </div>

    {/* Last two divs in a column */}
    <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2">
      {/* Registration Number */}
      <div className="flex-1">
        <p className="font-black text-xs text-[#343741]">사업자등록번호 CIN</p>
        <p className="text-[#5E626F] font-black text-sm">427-86-01187</p>
        <p className="text-[#5E626F] font-black text-sm">U74110DL2016PTC290812</p>
      </div>

      {/* Address */}
      <div className="flex-1">
        <p className="font-black text-xs text-[#343741]">주소 ADDRESS</p>
        <p className="text-[#5E626F] font-black text-sm">서울특별시 강남대로 479, 지하 1층 238호</p>
        <p className="text-[#5E626F] font-black text-sm">
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br />
          110053 India
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Footer Bottom */}
        <div className="text-start text-sm text-gray-500">
          © 2023 Hyperhire
        </div>
      </div>
    </footer>
  );
};
