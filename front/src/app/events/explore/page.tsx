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
import { MdOutlineMusicNote } from "react-icons/md";
import { LiaTheaterMasksSolid } from "react-icons/lia";

const Explore = () => {
  const [selected, setSelected] = useState(false);
  const { events, getEvents } = storeEvents()
  const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500);
  const [tag, setTag] = useState('')

  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected(!selected)
    setTag(e.currentTarget.name)
  };

  const CollectionTag = [
    {name: "Diurnas", icon: CiSun, select: false, handleSelect: handleSelect},
    {name: "Nocturnas", icon: BsMoonStars, select: false, handleSelect: handleSelect},
    {name: "Musicales", icon: MdOutlineMusicNote, select: false, handleSelect: handleSelect},
    {name: "Teatrales", icon: LiaTheaterMasksSolid, select: false, handleSelect: handleSelect},
    {name: "Gastronomia", icon: GiKnifeFork, select: false, handleSelect: handleSelect}
  ]

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value) 
  }

  useEffect(() => {
    if(!selected) setTag('') 
  }, [selected])

  useEffect(() => {
    if(token){
      getEvents(token, query, 20)
    }
  }, [debouncedQuery])

  const filterEvents = events.filter(({tags}) => {
    if(tag !== ''){
      return tags.includes(tag)
    } else return true
  })

  return (
    <div className="flex h-screen w-full px-2">
      <div className="w-1/12 h-full flex justify-center my-40">
        {/* <div className="fixed flex flex-col items-center justify-between">
          <div className="h-1/6 my-4">
          </div>
          {
            CollectionTag.map((elemento) => <CustomButton 
              key={elemento.name} 
              icon={elemento.icon} 
              text={elemento.name} 
              selected={elemento.name === tag} 
              handleSelect={elemento.handleSelect} 
            />)
          }
        </div> */}
      </div>
      <div className="w-11/12 h-full my-40">
      <Input placeholder="Buscar eventos" type='text' value={query} onChange={handleInputChange} />
        {/* <Popular /> */}
        <AllEvents events={filterEvents} />
      </div>
    </div>
  );
};

export default Explore;
