"use client"
import React, { MouseEvent } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { MdOutlineMusicNote } from "react-icons/md";
import { useState } from "react";

interface CustomButtonProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  handleSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  selected: boolean;
}


const CustomButton: React.FC<CustomButtonProps> = ({ icon: Icon, text, selected, handleSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-1/6 my-4 w-max">
      <button
        onClick={handleSelect}
        name='Diurnas'
        className={`border p-2 ${!selected ? 'bg-gray-300' : 'bg-[#1A7754]'} w-max rounded-full shadow-lg cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon className="size-16 pointer-events-none" />
      </button>
      {isHovered && (
        <div className="bg-gray-800 w-auto text-white rounded 
          text-center p-2 mx-auto 

          ">
          { text }
        </div>
      )}
    </div>
  );
};



export default CustomButton;
