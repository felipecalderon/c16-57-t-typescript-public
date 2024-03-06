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
            <TabsContent value="account" className="w-full bg-[#F5CAD7] rounded-b-lg rounded-tr-lg">
              <Card className=" bg-[#F5CAD7] ">
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password" className="w-full bg-[#F5CAD7] rounded-b-lg rounded-tr-lg">
              <Card className=" bg-[#F5CAD7]">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Preview;
