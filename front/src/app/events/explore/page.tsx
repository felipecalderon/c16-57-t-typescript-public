import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { MdOutlineMusicNote } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Axios from "axios";
import { Ieventos } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import CardPopular from "@/components/CardPopular";
import Popular from "@/components/Popular";
import AllEvents from "@/components/allEvents";

const Explore = () => {
  return (
    <div className="flex h-screen w-full px-2">
      <div className="w-1/12 h-full flex flex-col items-center">
        <div className="h-1/6"></div>
        <div className="h-1/6">
          <button className="border p-2 bg-gray-300 hover:bg-gray-400 w-max rounded-full shadow-lg ">
            <CiSun className="size-8" />
          </button>
        </div>
        <div className="h-1/6">
          <button className="border p-2 bg-gray-300 hover:bg-gray-400 w-max rounded-full shadow-lg ">
            <BsMoonStars className="size-8" />
          </button>
        </div>
        <div className="h-1/6">
          <button className="border p-2 bg-gray-300 fill-black hover:bg-gray-400 w-max rounded-full shadow-lg ">
            <MdOutlineMusicNote className="size-8" />
          </button>
        </div>
        <div className="h-1/6">
          <button className="border p-2 bg-gray-300 hover:bg-gray-400 w-max rounded-full shadow-lg ">
            <LiaTheaterMasksSolid className="size-8" />
          </button>
        </div>
        <div className="h-1/6">
          <button className="border p-2 bg-gray-300 hover:bg-gray-400 w-max rounded-full shadow-lg ">
            <GiKnifeFork className="size-8" />
          </button>
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
