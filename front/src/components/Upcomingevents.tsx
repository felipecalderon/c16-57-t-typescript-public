"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
const events = [
  {
    title: "Juntada en la casa de fulanito",
    dateTime: "Tue Feb 20 2024 14:12:58 GMT-0300",
    description: "alguna descrpcion del evento",
  },
  {
    title: "Juntada en la casa de fulanito",
    dateTime: "Tue Feb 20 2024 14:12:58 GMT-0300",
    description: "alguna descripcion del evento",
  },
];
const img =
  "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";

const UpcomingEvents = () => {
  return (
    <section className="p-12 ">
      <div className="flex justify-center items-center justify-between p-4">
        <h3 className="text-lg font-semibold pl-4">Tus proximas Salidas</h3>
        <Link
          href="/upcomingEvents"
          className="text-sky-500 hover:underline hover:text-sky-400 pr-6"
        >
          Ver más
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        {events.map((event, index) => {
          return (
            <Card
              className={`${index === 0 ? "w-2/3 rounded-l-xl rounded-r-none" : "w-1/3 rounded-r-xl rounded-l-none border "} bg-green-200 hover:shadow hover:shadow-lg hover:shadow-green-300 hover:border-green-400`}
            >
              <CardContent
                className={`flex justify-center items-center flex-col rounded-b-xl ${index === 0 ? "rounded-tl-xl" : "rounded-tr-xl"} bg-white`}
              >
                <div className=" w-full flex justify-center items-center justify-around">
                  <div>
                    <p className="block text-5xl w-full">Mar</p>
                    <p className="block text-5xl">20</p>
                  </div>
                  <img src={img} alt="image-event" className="w-40 h-40" />
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
                    {event?.dateTime
                      .split(" ")
                      .slice(4, 5)
                      .join()
                      .split(":")
                      .slice(0, 2)
                      .join(":") + " hs"}
                  </p>
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
