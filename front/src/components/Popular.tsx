"use client"
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Ieventos } from "@/lib/interfaces";
import CardPopular from "@/components/CardPopular";
import { storeEvents } from "@/stores/events.store";



const Popular = () => {
    const { events } = storeEvents()

    return (
        <div className="w-full mx-auto">
        <div className="text-left block w-full  pl-12 ">
            <h2 className="pl-6 text-2xl font-extrabold">POPULARES</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
            {
            events.map((event: Ieventos, index: number) => {
                return (
                <CardPopular key={index} event={event} />
                );
            }
            )
            }
        </div>
        </div>
    );
        }

export default Popular;