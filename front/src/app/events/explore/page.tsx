"use client";
import React, { ChangeEvent, EventHandler, MouseEvent, MouseEventHandler, useEffect } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import Popular from "@/components/Popular";
import AllEvents from "@/components/allEvents";
import { useState } from "react";
import CustomButton from "@/components/customButton";
import { storeEvents } from "@/stores/events.store";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/debounce";

const Explore = () => {
  const [selected, setSelected] = useState(false);
  const { events, getEvents } = storeEvents()
  const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500);
  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    setSelected(!selected)
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value) 
  }

  useEffect(() => {
    if(token){
      getEvents(token, query, 8)
    }
  }, [debouncedQuery])

  const filterEvents = events.filter(({tags}) => tags.includes(query))
  
  return (
    <div className="flex h-screen w-full px-2">
      <div className="w-1/12 h-full flex justify-center my-40">
        <div className="fixed flex flex-col items-center justify-between">
          <div className="h-1/6 my-4">
          </div>
          <div className="h-1/6 my-4 w-max">
            <button
              onClick={(e) => handleSelect(e)}
              name='Diurnas'
              className={`border p-2 ${!selected ? 'bg-gray-300' : 'bg-[#1A7754]'} w-max rounded-full shadow-lg cursor-pointer`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CiSun className="size-16 pointer-events-none" />
            </button>
            {isHovered && (
              <div className="bg-gray-800 w-auto text-white rounded 
          text-center p-2 mx-auto 

          ">
                Diurnas
              </div>
            )}


          </div>
          <CustomButton icon={BsMoonStars} text="Nocturnas" selected={selected} handleSelect={handleSelect} />

        </div>
      </div>
      <div className="w-11/12 h-full my-40">
      <Input placeholder="Buscar eventos" type='text' value={query} onChange={handleInputChange} />
        {/* <Popular /> */}
        <AllEvents events={events} />
      </div>
    </div>
  );
};

export default Explore;
