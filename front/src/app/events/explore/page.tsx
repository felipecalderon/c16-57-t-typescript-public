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

  const CollectionTag= [
    {name: "Diurnas", icon: CiSun},
    {name: "Nocturnas", icon: BsMoonStars},
    {name: "Musicales", icon: MdOutlineMusicNote},
    {name: "Teatrales", icon: LiaTheaterMasksSolid},
    {name: "Gastronomia", icon: GiKnifeFork}
  ]
  const [selected, setSelected] = useState("");

  const handleSelect = (name: string) => {
    setSelected(name);
  };

  



  return (
    <div className="flex h-screen w-full px-2">
      <div className="w-1/12 h-full flex justify-center my-40">
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
      <div className="w-11/12 h-full my-40">
        <Popular />
        <AllEvents />
      </div>
    </div>
  );
};

export default Explore;
