"use client";
import React from "react";
import axios from "axios";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Ieventos } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import DetalleDialog from "./details/details-dialog";
import { Dialog, DialogTrigger } from "./ui/dialog";


const AllEvents = ({events}: {events: Ieventos[]}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleToggle = () => {
    console.log({isDialogOpen});
    setIsDialogOpen(!isDialogOpen)
  }
  if (events) return (
    <div className="w-full h-full my-10">
      <h1
        className="
        text-2xl font-extrabold
        pl-6
        "
      >
        ALL EVENTS
      </h1>

      <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-1 my-10">
        {events.map((event, index) => {
          return (
            <Dialog onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
            <Card
              key={index}
              className="w-full lg:h-max min-h-36  rounded-xl shadow-lg shadow-slate-500 hover:shadow-xl p-1"
            >
              <CardContent className="flex flex-nowrap max-xl:flex-col">
                <div className=" p-2 lg:min-w-2/6 sm:w-full">
                  <img
                    src={
                      event.image?.toString() ||
                      "https://img.freepik.com/foto-gratis/encuentro-amigos-restaurante_23-2148395439.jpg"
                    }
                    alt="evento"
                    className="min-h-32 min-w-24 rounded-t-xl object-cover sm:w-full object-center  "
                  />
                </div>
                <div className="lg:min-w-4/6  sm:w-full  p-2">
                  <CardTitle className="text-2xl">{event.title}</CardTitle>

                  <div className="font-semibold">Hoy a las 21:00hs</div>
                </div>
              </CardContent>
            </Card>
            </DialogTrigger>
            <DetalleDialog event={event} onClick={() => handleToggle} />
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};

export default AllEvents;
