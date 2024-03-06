"use client";
import { Button } from "@/components/ui/button";
import MenuMyEvents from "@/components/menuMyEvents/MenuMyEvents";
import CardMyEvents from "@/components/cardMyEvents/CardMyEvents";
import AncientEvents from "@/components/ancientEvents/AncientEvents";
import ProxEvents from "@/components/proxEvents/ProxEvents";
import { useState } from "react";

const MyEvents = () => {
  const [eventState, setEventState] = useState<string>("admin");
  const [ ancient, setAncient] = useState<boolean>(false);
  return (
    <>
      <section className="flex justify-center items-center flex-col pt-10 gap-6">
        <h2 className="text-xl font-semibold">Organicemos algo</h2>
        <Button className="w-48 font-semibold bg-[#1A7754] hover:bg-[#3e9976] shadow-md hover:shadow-gray-400">
          + Crear
        </Button>
      </section>
      <section className="flex gap-10 p-5 pt-9 ">
        <MenuMyEvents setEventState={setEventState} setAncient={setAncient} />
        <div>
          {ancient ? <ProxEvents eventState={eventState}/> : <CardMyEvents eventState={eventState}/>}
          {!ancient && <AncientEvents eventState={eventState}/>}
        </div>
      </section>
    </>
  );
};

export default MyEvents;
