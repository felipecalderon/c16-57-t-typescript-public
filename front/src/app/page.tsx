'use client'
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios-config";

const HomePage = () => {
  const [isLogged, setLogged] = useState(false)
  const route = useRouter()
  const fetchEvents = async () => {
        try {
            const organizerId = window ? localStorage.getItem("token") : undefined;
            const response = await axiosInstance.get(
                `/api/events/`,
                {
                  headers: {
                    "auth-token": organizerId,
                  },
                }
              );
              const eventos = response.data
              console.log(eventos);
              setLogged(true)
              route.push('/dashboard')

        } catch (error) {
          setLogged(false)
          route.push('/auth')
        }
    }
    useEffect(() => {
        fetchEvents()
        route.push("dashboard")
      }, [])
      
  return (
  <p>..Cargando</p>
  )
}

export default HomePage;
