"use client"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";

import { Ieventos } from "@/lib/interfaces";
import Image from "next/image";

export default function CardRecomended({event}: {event: Ieventos}){
    const img =
  "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";

    return (
      <Card className="w-full h-max  rounded-xl shadow-lg shadow-slate-500 hover:shadow-xl  bg-white" >
      <CardContent className="flex justify-center items-center flex-col rounded-t-xl min-h-64 min-w-48" style={{backgroundImage: `url(${event.image?event.image:img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
         
      </CardContent>
      <CardFooter className="flex  justify-start  py-2 rounded-b-xl">
          <div className=" ">
            <img src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg" alt="profile" className="h-16 w-16 rounded-full"/>
          </div>
        <div className="flex flex-col items-center "
        ><CardTitle className="text-start text-2xl">
          {event.title}
        </CardTitle>
          <CardDescription className="text-sm">
         
          </CardDescription>
          </div>
      </CardFooter>
    </Card>
    )
}