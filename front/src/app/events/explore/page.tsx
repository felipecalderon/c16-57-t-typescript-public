"use client";
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { MdOutlineMusicNote } from "react-icons/md";
import Popular from "@/components/Popular";
import AllEvents from "@/components/allEvents";
import { useState } from "react";
import CustomButton from "@/components/customButton";

const Explore = () => {


  return (
    <div className="flex h-screen w-full px-2">
      <div className="w-1/12 h-full flex justify-center ">
        <div className="fixed flex flex-col items-center justify-between">
          <div className="h-1/6 my-4">
            </div>
          <CustomButton icon={CiSun} text="Diurnas" />
          <CustomButton icon={BsMoonStars} text="Nocturnas" />
          <CustomButton icon={MdOutlineMusicNote} text="Musicales" />
          <CustomButton icon={LiaTheaterMasksSolid} text="Teatrales" />
          <CustomButton  icon={GiKnifeFork} text="Gastronomia" />

        </div>
      </div>
      <div className="w-5/6 h-full">
        <Popular />
        <AllEvents />
      </div>
    </div>
  );
};

export default Explore;
