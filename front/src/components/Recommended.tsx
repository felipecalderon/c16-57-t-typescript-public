"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const Recommended = () => {
  return (
    <section className="flex flex-col justify-center items-center p-2">
      <div className="text-left block w-full  pl-12 ">
        <h4 className="pl-6 text-lg font-semibold">Recomendados</h4>
      </div>
      <Carousel className="w-[calc(100vw-120px)] border-1 p-1">
        <CarouselContent>
          {events.map((event) => {
            return (
              <CarouselItem className="basis-1/3 pt-4 pb-4 m-4- ">
                <Card className="w-full rounded-xl hover:shadow hover:shadow-lg hover:shadow-green-300 hover:border-green-400 bg-green-200">
                  <CardContent className="flex justify-center items-center flex-col rounded-xl bg-white">
                    <div className=" w-full flex justify-center items-center justify-around">
                      <div>
                        <p className="block text-5xl w-full">Mar</p>
                        <p className="block text-5xl">20</p>
                      </div>
                      <img src={img} alt="image-event" className="w-40 h-40" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 bg-green-200 pt-2 rounded-b-xl">
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
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Recommended;
