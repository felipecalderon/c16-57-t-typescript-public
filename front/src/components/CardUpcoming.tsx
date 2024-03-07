import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Ieventos } from "@/lib/interfaces";
import Image from "next/image";

export default function CardUpcoming({event, index}: {event: Ieventos, index: number}){
  const img = "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";
    return (
        <Card
              className={`${index === 0 ? "w-2/3 rounded-l-xl rounded-r-none" : "w-1/3 rounded-r-xl rounded-l-none border "} bg-green-200  hover:shadow-lg hover:shadow-green-300 hover:border-green-400`}
            >
              <CardContent
                className={`flex justify-center items-center flex-col rounded-b-xl ${index === 0 ? "rounded-tl-xl" : "rounded-tr-xl"} bg-white`}
              >
                <div className=" w-full flex  items-center justify-around">
                  <div>
                    <p className="block text-5xl w-full">Mar</p>
                    <p className="block text-5xl">20</p>
                  </div>
                  <Image src={img} alt="image-event" width={40} height={40}/>
                </div>
              </CardContent>
              <CardFooter
                className={`flex flex-col items-start gap-3 bg-green-200 pt-2 ${index === 0 ? "rounded-bl-xl" : "rounded-bl-none rounded-br-xl"}`}
              >
                <CardTitle className="text-start text-xl">
                  {event.title}
                </CardTitle>
                <div className="flex items-center gap-2">
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
