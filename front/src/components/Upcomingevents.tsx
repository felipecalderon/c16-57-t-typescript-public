"use client";
import Link from "next/link";
import { Ieventos } from "@/lib/interfaces";
import CardUpcoming from "./CardUpcoming";
import { storeEvents } from "@/stores/events.store";
import DetalleDialog from "./details/details-dialog";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const UpcomingEvents = () => {
  const { events } = storeEvents();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleToggle = () => {
    console.log({isDialogOpen});
    setIsDialogOpen(!isDialogOpen)
  }

  const eventFilter = events.filter((event: Ieventos) => {
    const date = new Date(event.startDate);
    const today = new Date();
    return date < today;
  }).splice(0, 2);

  return (
    <section className="pt-2 pl-12 pr-12 pb-2">
      <div className="text-left block w-full  px-2 py-2 ">
        <h2 className="pl-6 text-2xl font-extrabold">PROXIMAS SALIDAS</h2>
        <div className="flex r items-center justify-between  w-full">
          <h4 className="pl-6 text-xl font-semibold text-left">
            Aca te mostramos tus salidas mas proximas
          </h4>
          <Link
            href="/upcomingEvents"
            className="font-semibold text-lg  underline text-right hover:text-sky-400 pr-6"
          >
            Ver todas mis salidas
          </Link>
        </div>
      </div>

      <div className="flex  items-center gap-3">
        {eventFilter.map((event: Ieventos, index: number) => (
          <Dialog onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <CardUpcoming key={index} index={index} event={event} onClick={() => setIsDialogOpen} />
            </DialogTrigger>
            <DetalleDialog event={event} onClick={() => handleToggle} />
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
