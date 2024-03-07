"use client";
import Link from "next/link";
import { Ieventos } from "@/lib/interfaces";
import CardUpcoming from "./CardUpcoming";

const UpcomingEvents = () => {
  return (
    <section className="pt-2 pl-12 pr-12 pb-2">
      <div className="flex r items-center justify-between p-4">
        <h3 className="text-lg font-semibold pl-4">Tus proximas Salidas</h3>
        <Link
          href="/upcomingEvents"
          className="text-sky-500 hover:underline hover:text-sky-400 pr-6"
        >
          Ver más
        </Link>
      </div>
      <div className="flex  items-center gap-3">
        {/* {eventFilter.map((event, index) => < CardUpcoming key={index} index={index} event={event}/>)} */}
      </div>
    </section>
  );
};

export default UpcomingEvents;
