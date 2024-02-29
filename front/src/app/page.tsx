'use client'
import SearchBar from "@/components/SearchBar";
import UpcomingEvents from "@/components/Upcomingevents";
import Recommended from "@/components/Recommended";
import Footer from "@/components/Footer";
import TagsFilter from "@/components/TagsFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isLogged, setLogged] = useState(false)
  const route = useRouter()
  const fetchEvents = async () => {
        try {
            const organizerId = window ? localStorage.getItem("token") : undefined;
            const response = await axios.get(
                `http://localhost:3001/api/events/`,
                {
                  headers: {
                    "auth-token": organizerId,
                  },
                }
              );
              const eventos = response.data
              setLogged(true)
              route.push('/dashboard')

        } catch (error) {
          setLogged(false)
          route.push('/auth')
        }
    }
    useEffect(() => {
        fetchEvents()
    }, [])
  return (
  <p>..Cargando</p>
  )
}

export default HomePage;