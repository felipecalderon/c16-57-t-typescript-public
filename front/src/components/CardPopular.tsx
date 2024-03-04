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
import { Ieventos } from "@/lib/interfaces";

const CardRecomended = ({ event }: { event: Ieventos }) => {
  return (
    <Card
      className="w-full lg:h-max min-h-72  rounded-xl shadow-lg shadow-slate-500 hover:shadow-xl p-1"
      style={{ backgroundColor: "#F4D977" }}
    >
      <CardContent className="flex flex-nowrap max-xl:flex-col">
        <div className=" p-2 lg:min-w-5/12 sm:w-full">
          <img
            src={
              event.image?.toString() ||
              "https://img.freepik.com/foto-gratis/encuentro-amigos-restaurante_23-2148395439.jpg"
            }
            alt="evento"
            className="min-h-64 min-w-48 rounded-t-xl object-cover sm:w-full object-center  "
          />
        </div>
        <div className="lg:min-w-7/12  sm:w-full  p-2">
          <CardTitle className="text-2xl">{event.title}</CardTitle>
          
            <div className="font-semibold">Hoy a las 21:00hs</div>
            <div className="py-4 text-md">{event.description}</div>
            <div className="font-medium py-2">{event.location}</div>
            <div className="font-medium py-2">Gratis</div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default CardRecomended;
