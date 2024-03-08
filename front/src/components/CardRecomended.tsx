"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { dateFormat } from "@/lib/date-format";

import { Ieventos } from "@/lib/interfaces";
import Image from "next/image";

export default function CardRecomended({ event, onClick}: { event: Ieventos, onClick: () => void }) {
  const {fecha, hora, mes} = dateFormat(event.startDate)
  const [ dia ] = fecha.split('/')
  const img =
    "https://img.freepik.com/foto-gratis/encuentro-amigos-restaurante_23-2148395439.jpg";

  return (
    <Card className="w-full h-max  rounded-xl shadow-lg shadow-slate-500 hover:shadow-xl  bg-white" onClick={onClick} >
      <CardContent className="flex justify-center items-center flex-col rounded-t-xl min-h-64 min-w-48" 
        style={{ backgroundImage: `url(${event.image ? event.image : img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-1/2 flex flex-col ">
            <p className="block text-4xl text-center text-white font-light ">{mes?.toUpperCase()}</p>
            <p className="block text-7xl text-center text-white font-bold">{dia}</p>
          </div>
      </CardContent>
      <CardFooter className="flex  justify-start  py-2 rounded-b-xl">
        <div>
          <img src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustración-de-alta-calidad.jpg" alt="profile" className="h-16 w-16 rounded-full" />
        </div>
        <div className="flex flex-col items-start pl-3">
          <CardTitle className="text-start text-2xl bree-serif-regular">
            {event.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {hora}
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  )
}