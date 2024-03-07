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
                <Card className="w-full  rounded-xl  hover:shadow-lg hover:shadow-green-300 hover:border-green-400 bg-green-200">
                  <CardContent className="flex justify-center items-center flex-col rounded-xl bg-white">
                    <div className=" w-full flex  items-center justify-around">
                      <div>
                        <p className="block text-5xl w-full">dia</p>
                        <p className="block text-5xl">mes</p>
                      </div>
                      <Image src={img} alt="image-event" width={40} height={40} />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 bg-green-200 pt-2 rounded-b-xl">
                    <CardTitle className="text-start text-xl">
                      {event.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 ">
                      <p className="text-sm">
                        fecha
                      </p>
                      <CardDescription className="text-sm">
                        {event.description}
                      </CardDescription>
                    </div>
                  </CardFooter>
                </Card>
    )
}