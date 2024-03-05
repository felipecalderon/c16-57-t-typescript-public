"use client"
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { MdOutlineMusicNote } from "react-icons/md";
import { useState } from "react";

interface CustomButtonProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text: string;
  }


const CustomButton: React.FC<CustomButtonProps> = ({ icon: Icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-1/6 my-4 w-max">
      <button
        className="border p-2 bg-gray-300 hover:bg-gray-400 w-max rounded-full shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon className="size-16" />
        
      </button>
      {isHovered && (
        <div className="bg-gray-800 w-auto text-white rounded 
        text-center p-2 mx-auto fixed 

         ">
            {text}
        </div>
      )}

      
    </div>
  );
};



export default CustomButton;
