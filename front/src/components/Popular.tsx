"use client"
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Ieventos } from "@/lib/interfaces";
import CardPopular from "@/components/CardPopular";



const Popular = () => {
    const [eventos, setEventos] = useState<Ieventos[]>([]);

  const fnGetEvents = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/api/events/", {
        headers: {
          "Auth-Token": localStorage.getItem("token"),
        },
      });
      console.log(response.data)
      setEventos(response.data.slice(0, 4));
    } catch (error) {
      console.error("Error al consultar el evento:", error);
    }
  };
  useEffect(() => {
    fnGetEvents();
  }, []);
    return (
        <div className="w-full mx-auto">
        <div className="text-left block w-full  pl-12 ">
            <h2 className="pl-6 text-2xl font-extrabold">POPULARES</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
            {
            eventos.map((event, index) => {
                return (
                <CardPopular key={index} event={event} />
                );
            }
            )
            }
        </div>
        </div>
    );
        }

export default Popular;