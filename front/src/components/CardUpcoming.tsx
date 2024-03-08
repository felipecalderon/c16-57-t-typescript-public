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

export default function CardUpcoming({event, index}: {event: Ieventos, index: number}){
  const img = "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";
  const date = new Date(event.startDate).toLocaleTimeString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const fechaInicio = date.split(",")[0];
  const mes = date.split(" ")[2];
  const dia = date.split(" ")[0];
  
    return (
      <Card
      className={`${index === 0 ? "w-2/3 rounded-l-xl rounded-r-none" : "w-1/3 rounded-r-xl rounded-l-none border "} shadow-slate-500 hover:shadow-xl`} style={{ backgroundColor: "#F4D977" }}
    >
      <CardContent style={{backgroundImage: `url(${event.image?event.image:img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        className={`flex   min-h-80 ${index === 0 ? "rounded-tl-xl justify-items-end items-start " : "rounded-tr-xl justify-items-center items-center "}`}
        
      >
        <div className={` ${index === 0 ? "h-1/2 w-full":"hidden"} `}>
        </div>
        <div className={` h-1/2 w-full  ${index === 0 ? "flex justify-end p-8":"flex  items-center justify-center p-8"} "`}>
          <div className="w-1/2 flex flex-col ">
            <p className="block text-3xl text-center text-white font-bold">{mes.toUpperCase()}</p>
            <p className="block text-7xl text-center text-white font-bold">{dia.toUpperCase()}</p>
            </div>
        </div>
      </CardContent>
      <CardFooter className={`flex  justify-start  py-2 rounded-b-xl`}>
        <div className="px-2 ">
          <img
            src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
            alt="profile"
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center ">
          <CardTitle className="text-start text-2xl">{event.title}</CardTitle>
          <CardDescription className="text-sm">{fechaInicio}</CardDescription>
        </div>
      </CardFooter>
    </Card>
    )
}
