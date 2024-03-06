'use client'
import Footer from '@/components/Footer'
import Recommended from '@/components/Recommended'
import SearchBar from '@/components/SearchBar'
import TagsFilter from '@/components/TagsFilter'
import UpcomingEvents from '@/components/Upcomingevents'
import axios from 'axios'
import React, { useEffect } from 'react'
import Cta from '@/components/Cta'
import ModalCrear from '@/components/modalCrear'

export default function DashboardPage() {
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
              console.log(eventos);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchEvents()
    }, [])
    return (
        <>
           
            <Cta/>
            <ModalCrear />
            <UpcomingEvents />
            <Recommended />
            <Footer />
        </>
    )
}

