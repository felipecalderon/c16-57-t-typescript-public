/* "use client";
import axios from "axios";
import React, { ChangeEvent } from "react";
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
import { IExpense } from "@/lib/interfaces";

const Preview = () => {
  const [event, setEvent] = useState({} as Ieventos);
  const [selected, setSelected] = useState(false);
  const [isEditando, setIsEditando] = useState(false);
  const handdleEdit = () => {
    setIsEditando(!isEditando);
  };





  const handleSelect = () => {
    setSelected(!selected);
  };

  const deleteEvent = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/events/${event._id}`,
        {
          headers: {
            "Auth-Token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let gasto = {
      userId : event.organizerId,
      description: e.currentTarget.description.value,
      amount: e.currentTarget.amount.value,
      eventId: event._id,

    };
    try {
      const response = await axios.post('http://localhost:3001/api/expense', gasto);
      e.currentTarget.description.value = '';
      e.currentTarget.amount.value = '';
      
      fnGetEvent();
    } catch (error) {
      console.error('Error making POST request', error);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    isPrivate: 'true',
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const guardarEvento = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/events/${event._id}`,
        formData,
        {
          headers: {
            "Auth-Token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error al guardar el evento:", error);
    }
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
        <button className=" rounded-full p-2" onClick={handdleEdit}>
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
        {isEditando ? (
          <form className="w-full my-2 shadow-2xl bg-[#F5CAD7] shadow-slate-500 mb-4 rounded-lg p-4 flex flex-col gap-5">
          <div className="w-full px-2 flex flex-col gap-5">
            <label htmlFor="title">Titulo</label>
            <input
              id="title"
              type="text"
              placeholder="Titulo"
              value={formData.title}
              defaultValue={event.title}
              onChange={handleInputChange}
            />
          </div>
    
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="description">Descripcion</label>
            <input
              id="description"
              type="text"
              placeholder="Descripcion"
              value={formData.description}
              defaultValue={event.description}
              onChange={handleInputChange}
            />
          </div>
    
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="location">Ubicacion</label>
            <input
              id="location"
              type="text"
              placeholder="Ubicacion"
              defaultValue={event.location}
              value={formData.location}
              
              onChange={handleInputChange}
            />
          </div>
    
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="startDate">Fecha de inicio</label>
            <input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
    
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="endDate">Fecha de fin</label>
            <input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>
    
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="isPrivate">Privacidad</label>
            <select
              id="isPrivate"
              className="w-full p-2 rounded-lg"
              value={formData.isPrivate}
              onChange={handleInputChange}
            >
              <option value="true">Privado</option>
              <option value="false">Publico</option>
            </select>
          </div>
                          <div className="w-full flex justify-center">
                            <Button className="w-1/4 bg-[#1A7754] text-white" onClick={guardarEvento}>
                              Guardar
                              </Button>
                              </div>
                              </form>
                              ) : (
                                
                              
        <div className="bg-[#F5CAD7] w-full shadow-2xl shadow-slate-500 mb-4 rounded-lg p-4">
          <h2 className="text-lg font-bold font-serif"> {event.title}</h2>

          <h4 className="font-normal text-lg text-wrap">{event.description}</h4>
        </div>
                              )}
        <div className="w-full">
          <Tabs defaultValue="invitar" className=" w-full">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger
                className={
                  selected
                    ? "bg-[#1A7754] rounded-tl-lg text-white p-2"
                    : "bg-black rounded-tl-lg p-2 text-white"
                }
                onClick={handleSelect}
                value="invitar"
              >
                Invite
              </TabsTrigger>
              <TabsTrigger
                className={
                  !selected
                    ? "bg-[#1A7754] rounded-tr-lg text-white p-2"
                    : "bg-black rounded-tr-lg p-2 text-white"
                }
                onClick={handleSelect}
                value="gastos"
              >
                Gastos
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="invitar"
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
              value="gastos"
              className="w-full bg-[#F5CAD7] rounded-b-lg rounded-tr-lg"
            >
              <Card className=" bg-[#F5CAD7] h-52">
                <CardContent className="space-y-2 flex justify-center items-center  py-8 flex-col">
                
                <div className="w-full h-1/2 overflow-y-auto">
                  {event.expenses?.map((gasto:IExpense) => (
                    <div className="w-full flex items-center px-5">
                      <span className="
                      font-bold text-md rounded-lg border p-2
                      ">{gasto.description}</span>

                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="w-full flex gap-5">
                  <div className="space-y-1 w-1/2  mb-2">
                    <Input
                      id="current"
                      type="text"
                      placeholder="Descripcion"
                      className="font-bolder text-lg"
                      name="description"
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
                      name="amount"
                    />
                  </div>
                  <div className="w-1/3 space-y-1">
                  <Button className="" >Guardar</Button>
                  </div>
                </form>
                </CardContent>

              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full py-8 flex justify-center items-center">
          <Button className="w-1/4 text-white" >
            Publicar evento
          </Button>
          </div>
      </div>
    </div>
  );
};

export default Preview;
 */