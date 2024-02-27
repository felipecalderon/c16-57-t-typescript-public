"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Ieventos } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import CardRecomended from "./CardRecomended";


const Recommended = () => {
  const [eventos, setEventos] = useState<Ieventos[]>([])

  const fnGetEvents = async () => {
    try {
      const response =  await axios.get("http://localhost:3001/api/events/", {
        headers: {
            "Auth-Token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWNlYjBlNTIzNDFmYjYyOTZmYWE4NDYiLCJpYXQiOjE3MDkwNjk3MjYsImV4cCI6MTcwOTA3MzMyNn0.iNFMGt5SuRBHFGAh5q3pwI6cUY_Y44U9xsV_q19eZ9c"
        }
      })
      setEventos(response.data)
    } catch (error) {
      console.error("Error al consultar el evento:", error);
    }
  }
  useEffect(() => {
    fnGetEvents()
  }, [])
  if(eventos.length === 0) return <p>Cargando...</p>
  return (
    <section className="flex flex-col justify-center items-center p-2">
      <div className="text-left block w-full  pl-12 ">
        <h4 className="pl-6 text-lg font-semibold">Recomendados</h4>
      </div>
      <Carousel className="w-[calc(100vw-120px)] border-1 p-1">
        <CarouselContent>
          {
          eventos.map((event, index) => {
          return (
            <CarouselItem 
            key={index} 
            className="basis-1/3 pt-4 pb-4 m-4- ">
          <CardRecomended event={event} />
          </ CarouselItem > 
          )

          
          })} 
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Recommended;
