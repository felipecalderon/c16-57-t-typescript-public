"use client";
import Link from "next/link";
import { Ieventos } from "@/lib/interfaces";
import CardUpcoming from "./CardUpcoming";
import axios from "axios";
import { useEffect, useState } from "react";

const UpcomingEvents = () => {
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

  const eventFilter = eventos.splice(0, 2);
  return (
    <section className="pt-2 pl-12 pr-12 pb-2">
      <div className="text-left block w-full  px-2 py-2 ">
        <h2 className="pl-6 text-2xl font-extrabold">PROXIMAS SALIDAS</h2>
        <div className="flex r items-center justify-between  w-full">
          <h4 className="pl-6 text-xl font-semibold text-left">
            Aca te mostramos tus salidas mas proximas
          </h4>
          <Link
            href="/upcomingEvents"
            className="font-semibold text-lg  underline text-right hover:text-sky-400 pr-6"
          >
            Ver todas mis salidas
          </Link>
        </div>
      </div>

      <div className="flex  items-center gap-3">
        {eventFilter.map((event, index) => (
          <CardUpcoming key={index} index={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
