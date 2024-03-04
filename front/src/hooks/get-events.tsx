'use client'
import { Ieventos } from "@/lib/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useEventsList(){
    const [events, setEvents] = useState<Ieventos[]>([])
    const [query, setQuery] = useState('')
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined

    useEffect(() => {
        if(token){
            let endpoint;
            if(query !== '') endpoint = "http://localhost:3001/api/events/"
            else endpoint = `http://localhost:3001/api/events/`
            axios.get(endpoint, {
                headers: {
                "Auth-Token": token,
                }
            }).then((remoteEvents) => setEvents(remoteEvents.data))
        }
    }, [])

    return { events, query, setQuery }
}