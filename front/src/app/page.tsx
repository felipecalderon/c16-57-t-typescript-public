'use client'
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios-config";
import { storeUser } from "@/stores/user.store";

const HomePage = () => {
  const route = useRouter()
  const { user } = storeUser()

  useEffect(() => {
    if (!user) {
      route.push('/auth')
    } else {
      route.push('/dashboard')
    }
  }, [])
  return (
    <p>..Cargando</p>
  )
}

export default HomePage;
