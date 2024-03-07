import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosPerson } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
type  CardMyEventsProps = {
  eventState : string;
};
const CardMyEvents: React.FC<CardMyEventsProps> = ({eventState}) => {
  const events = [
    {
      title: "Juntada en la casa de fulanito",
      startDate: "Tue Feb 01 2024 14:12:58 GMT-0300",
      description: "alguna descrpcion del evento",
      image:
      "https://media.istockphoto.com/id/1451468758/es/foto/silueta-de-la-gente-en-un-club-con-luces-de-colores-y-confetis.jpg?s=612x612&w=0&k=20&c=8Z4sG3zHRdXSfQ_lb47UE8MYmoTbLmeLVZFau1mWujY=",
      organizerId:"admin"
    },
    {
      title: "Juntada en la casa de fulanito",
      startDate: "Tue Feb 07 2024 14:12:58 GMT-0300",
      description: "alguna descripcion del evento",
      image:
        "https://media.istockphoto.com/id/1202519088/es/foto/grupo-de-j%C3%B3venes-divirti%C3%A9ndose-en-una-bolera.jpg?s=612x612&w=0&k=20&c=M361XuF6059iqht7dIfB5Xv-0LwuzspE6MEjJSrAAFo=",
        organizerId:"admin"
      },
    {
      title: "Juntada en la casa de fulanito",
      startDate: "Tue Feb 20 2024 14:12:58 GMT-0300",
      description: "alguna descrpcion del evento",
      image:
        "https://media.istockphoto.com/id/1459275069/es/foto/amigos-alegres-disfrutando-de-frutas-y-bebidas-en-la-playa-al-atardecer.jpg?s=612x612&w=0&k=20&c=c3HWphlZm5M-um9sTY9CtQR6rZSmziS1wQilDLY3eMg=",
      organizerId:"admin"
      },
    {
      title: "Juntada en la casa de fulanito",
      startDate: "Tue Feb 27 2024 14:12:58 GMT-0300",
      description: "alguna descrpcion del evento",
      image:
        "https://media.istockphoto.com/id/1296817502/es/foto/felices-amigos-masculinos-viendo-f%C3%BAtbol-en-casa.jpg?s=1024x1024&w=is&k=20&c=ii60i6x0n-oU-G319mup3SLbA2YHf-D0RGpDXL4Vn1I=",
      organizerId:"admin"
      },
      {
        title: "Juntada en la casa de fulanito",
        startDate: "Tue Mar 01 2024 14:12:58 GMT-0300",
        description: "alguna descrpcion del evento",
        image:
        "https://media.istockphoto.com/id/1445184056/es/foto/la-mano-humana-agrega-sal-a-los-filetes-en-la-barbacoa.jpg?s=1024x1024&w=is&k=20&c=VW9lAeSGk2qHRSzZOjiEw378pmhnzp5NIwMkXNho_0k=",
        organizerId:"asistant"
      },
      {
        title: "Juntada en la casa de fulanito",
        startDate: "Tue Mar 07 2024 14:12:58 GMT-0300",
        description: "alguna descripcion del evento",
        image:
          "https://media.istockphoto.com/id/1441600739/es/foto/un-grupo-de-campistas-celebra-alrededor-de-la-fogata-a-finales-de-la-noche-de-oto%C3%B1o.jpg?s=1024x1024&w=is&k=20&c=feH8jfx2vP2pgGFiMreX2MkVZrTZXM71MfVMmUPSQa0=",
          organizerId:"asistant"
        },
      {
        title: "Juntada en la casa de fulanito",
        startDate: "Tue Mar 20 2024 14:12:58 GMT-0300",
        description: "alguna descrpcion del evento",
        image:
          "https://media.istockphoto.com/id/1172760486/es/foto/as%C3%AD-es-como-lo-hacemos.jpg?s=1024x1024&w=is&k=20&c=BLxco0EJ9F8Ws3K7A90TnqfUg-XCcIj7SkpQ_JNspOA=",
        organizerId:"asistant"
        },
      {
        title: "Juntada en la casa de fulanito",
        startDate: "Tue Mar 31 2024 14:12:58 GMT-0300",
        description: "alguna descrpcion del evento",
        image:
          "https://media.istockphoto.com/id/1440057641/es/foto/tackle-deslizante.jpg?s=1024x1024&w=is&k=20&c=uSBiInKZixWuANzY58FbACm2tOwMfVT-xKbPgXP5ZwA=",
        organizerId:"asistant"
        },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col ">
        <div className="w-11/12 flex justify-between p-2 items-center">
          <h4 className="text-lg font-semibold">Enero</h4>
          <Button className="py-1 bg-black hover:bg-gray-700 shadow-md hover:shadow-gray-400">
            + Conectar con calendar
          </Button>
        </div>
        <Card className="flex justify-between w-11/12 rounded-xl bg-[#F4D977] shadow-lg shadow-gray-300 hover:border-[#1A7754] hover:shadow-[#1A7754]">
          <CardContent className="flex gap-3 items-start p-2">
            <div className={`flex justify-center items-center w-96 h-64 rounded-l-xl ${eventState === "admin" ? "bg-[url('https://media-cdn.tripadvisor.com/media/photo-s/15/cc/c9/4d/rabia-bar-barra-segundo.jpg')]" : "bg-[url('https://barullo.com.ar/wp-content/uploads/2021/11/space.jpg')]"} `}>
              <div className="text-3xl font-bold text-[#F6F6F6]">
                <h3>Ene</h3>
                <h3>{eventState === "admin" ? `03` : `21`}</h3>
              </div>
            </div>
            <div className="p-6 ">
              <h3 className="text-lg font-bold">{eventState === "admin" ? `Encuentro en Rabia Bar` : `Cumple de Cami`}</h3>
              <p className="font-semibold">
                <IoIosPerson className="inline text-xl"/> {eventState === "admin" ? `20 Asistentes` : `100 Asistentes`}
              </p>
            </div>
          </CardContent>
          <span className="p-2">
            <IoIosArrowForward className="text-xl font-bold" />
          </span>
        </Card>
      </div>

      <section className="w-full flex justify-center flex-col items-center">
        <h3 className="text-lg pt-5 pl-10 w-full font-bold">Proximos en mi lista</h3>
        <Carousel className=" border-1 p-1 w-11/12">
          <CarouselContent>
            {events.map((event, index) => {
             if(event.organizerId === eventState){return (
                <CarouselItem key={index} className="basis-1/3 pt-4 pb-4 m-4- ">
                  <Card className="p-2 bg-[#F4D977] shadow-lg shadow-gray-300 hover:border-[#1A7754] hover:shadow-[#1A7754]">
                    <CardContent className="flex gap-3 items-center flex-col ">
                      <Image
                        src={event.image}
                        alt="image-event"
                        width={500}
                        height={150}
                        className="relative rounded-xl"
                      />
                      <div className="pl-10 text-xl font-bold absolute top-20 text-[#F6F6F6]">
                        <h3>{event.startDate.split(" ").slice(1, 2)}</h3>
                        <h3>{event.startDate.split(" ").slice(2, 3)}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )}
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default CardMyEvents;
