'use client'
import { Ieventos } from "@/lib/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "./debounce";

export default function useEventsList(){
    const [events, setEvents] = useState<Ieventos[]>([])
    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState(5)
    const debouncedQuery = useDebounce(query, 500);
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined

    useEffect(() => {
        if(token){
            let endpoint;
            let querys = `limit=${limit}`
            if(query !== ''){ 
                querys = `${querys}&q=${query}`
                endpoint = `http://localhost:3001/api/events?${querys}`
            }
            else endpoint = `http://localhost:3001/api/events?${querys}`
            axios.get(endpoint, {
                headers: {
                "Auth-Token": token,
                }
            }).then((remoteEvents) => setEvents(remoteEvents.data))
        }
    }, [debouncedQuery, limit])

    return { events, query, setQuery, limit, setLimit }
}