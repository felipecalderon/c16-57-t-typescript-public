"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Ieventos } from "@/lib/interfaces";
import { dateFormat } from "@/lib/date-format";
import { TfiLocationPin } from "react-icons/tfi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiTrash } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Preview = () => {
  const [event, setEvent] = useState({} as Ieventos);
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const fnGetEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/events/65d78a84054d379e2e792a3d",
        {
          headers: {
            "Auth-Token": localStorage.getItem("token"),
          },
        }
      );
      setEvent(response.data);
    } catch (error) {
      console.error("Error al consultar el evento:", error);
    }
  };
  React.useEffect(() => {
    fnGetEvent();
  }, []);
  const fechaInicio = new Date(event.startDate)
    .toLocaleTimeString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(",")[0];
  if (event === undefined) return <p>Cargando...</p>;

  return (
    <div className="flex h-screen w-full p-12">
      <div className="w-2/12 h-full flex  my-40 items-center flex-col gap-4">
        <h1 className="text-center font-bold text-3xl font-serif text-wrap">
          {event.title}
        </h1>
        <h2 className="text-center font-semibold text-lg text-wrap">
          {fechaInicio}
        </h2>
        <h4 className="text-center font-normal text-lg text-wrap flex ">
          <TfiLocationPin className="my-1" />

          {event.location}
        </h4>
      </div>
      <div className="w-10/12  h-full p-12">
        <div className="flex justify-end gap-5">
        <button className=" rounded-full p-2">
          <CiSettings className="text-4xl border rounded-full"/>
        </button>
        <button className="rounded-full p-2 ">
          <CiTrash className="text-4xl border rounded-full" />
        </button>
        </div>
        <div className="bg-[#F5CAD7] w-full rounded-lg shadow-2xl shadow-slate-500 my-4 p-1">
          <div className="w-full bg-[#F5CAD7] h-max">
            <img
              src={event.image}
              alt=""
              className="w-full h-72 object-cover object-center"
            />
          </div>
          <div className="p-2 ">
            <p className="font-bold text-xl text-center font-serif">
              ESTE EVENTO ES {event.isPrivate ? "PRIVADO" : "PUBLICO"}
            </p>
          </div>
        </div>

        <h4 className="font-semibold font-serif text-lg mt-4">
          Detalles del evento
        </h4>

        <div className="bg-[#F5CAD7] w-full shadow-2xl shadow-slate-500 mb-4 rounded-lg p-4">
          <h2 className="text-lg font-bold font-serif"> {event.title}</h2>

          <h4 className="font-normal text-lg text-wrap">{event.description}</h4>
        </div>

        <div className="w-full">
          <Tabs defaultValue="account" className=" w-full">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger
                className={
                  selected
                    ? "bg-[#1A7754] rounded-tl-lg text-white p-2"
                    : "bg-black rounded-tl-lg p-2 text-white"
                }
                onClick={handleSelect}
                value="account"
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                className={
                  !selected
                    ? "bg-[#1A7754] rounded-tr-lg text-white p-2"
                    : "bg-black rounded-tr-lg p-2 text-white"
                }
                onClick={handleSelect}
                value="password"
              >
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="account"
              className="w-full bg-[#F5CAD7] rounded-b-lg rounded-tr-lg"
            >
              <Card className=" bg-[#F5CAD7] h-52 ">
                <CardContent className="space-y-2 flex justify-center items-center flex-col h-full py-8">
                  
                  <Button className="w-1/4 bg-[#1A7754] text-white">
                    + Agregar personas
                  </Button>
                  
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="password"
              className="w-full bg-[#F5CAD7] rounded-b-lg rounded-tr-lg"
            >
              <Card className=" bg-[#F5CAD7] h-52">
                <CardContent className="space-y-2 flex justify-center items-center flex-col py-8">
                  <div className="space-y-1 w-1/2  mb-2">
                    <Input
                      id="current"
                      type="text"
                      placeholder="Descripcion"
                      className="font-bolder text-lg"
                    />
                  </div>
                  <div className="space-y-1  w-1/2">
                    <Input
                      id="new"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      className="font-bolder text-lg"
                      max="10000 "
                    />
                  </div>
                  <Button className="mt-4">Guardar</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full py-8 flex justify-center items-center">
          <Button className="w-1/4 text-white">
            Publicar evento
          </Button>
          </div>
      </div>
    </div>
  );
};

export default Preview;
