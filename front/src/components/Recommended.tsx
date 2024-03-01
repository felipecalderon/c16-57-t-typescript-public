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
import DetalleDialog from "./details/details-dialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Recommended = () => {
  const [eventos, setEventos] = useState<Ieventos[]>([]);

  const fnGetEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/events/", {
        headers: {
          "Auth-Token": localStorage.getItem("token"),
        },
      });
      setEventos(response.data);
    } catch (error) {
      console.error("Error al consultar el evento:", error);
    }
  };
  useEffect(() => {
    fnGetEvents();
  }, []);

  if (eventos.length === 0) return <p>Cargando...</p>;
  return (
    <section className="flex flex-col justify-center items-center p-2">
      <div className="text-left block w-full  pl-12 ">
        <h4 className="pl-6 text-lg font-semibold">Recomendados</h4>
      </div>
      <Carousel className="w-[calc(100vw-120px)] border-1 p-1">
        <CarouselContent>
          {eventos.map((event, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 pt-4 pb-4 m-4- ">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-max">
                    <CardRecomended event={event} />
                    </button>
                  </DialogTrigger>
                  <DetalleDialog event={event} />
                </Dialog>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Recommended;
