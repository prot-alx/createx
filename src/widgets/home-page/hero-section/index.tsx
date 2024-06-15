import React from "react";
import Button from "@/shared/ui/buttons/Button";
import topbanner from "@/shared/img/hero-section.png";

export const HeroSection: React.FC = () => {
  return (
    <div
      className="flex-col items-center justify-center w-full mx-auto max-w-[1920px] bg-cover bg-center"
      style={{ backgroundImage: `url(${topbanner})`, height: '100vh', maxHeight: '800px' }}
    >
      <div className="container mx-auto">
        <div className="text-large text-gray-900 pt-36">
          <b>NEW COLLECTION</b>
        </div>
        <div className="text-[72px] text-gray-900 pb-16">
          <b>Menswear 2020</b>
        </div>
        <div className="flex gap-6">
          <Button className="w-[152px] h-[52px]" type="transparent">
            <b>Shop sale</b>
          </Button>
          <Button className="w-[229px] h-[52px]">
            <b>Shop the menswear</b>
          </Button>
        </div>
      </div>
      <div className="flex mx-auto justify-between w-[96%]">
        <div className="flex-col w-full">
          <div className="flex justify-between">
            <button className="bg-white w-12 h-12 rounded-full">1</button>
            <button className="bg-white w-12 h-12 rounded-full">2</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-4 text-gray-800 text-[28px] pt-44">
          <button className="text-left w-[178px] h-[54px] border-b-[2px] border-gray-800"><b>01</b></button>
          <button className="text-left w-[178px] h-[54px] border-b-[2px] border-gray-800"><b>02</b></button>
          <button className="text-left w-[178px] h-[54px] border-b-[2px] border-gray-800"><b>03</b></button>
          <button className="text-left w-[178px] h-[54px] border-b-[2px] border-gray-800"><b>04</b></button>
        </div>
      </div>
    </div>
  );
};
