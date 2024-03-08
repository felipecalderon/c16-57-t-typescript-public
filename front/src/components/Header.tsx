"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NotificationsModal from "./NotificationsModal";
import { storeEvents } from "@/stores/events.store";
import { useEffect, useState } from "react";
import { storeUser } from "@/stores/user.store";
import { Button } from "./ui/button";

const Header = () => {
  const { getEvents } = storeEvents()
  const { user, getUserData } = storeUser()
  const profileimg = "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
  const [isLogged, setLogged] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
    setLogged(false)
  }
  
  
  useEffect(() => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined
    if (token) {
      setLogged(true)
      getEvents(token, '', 20)
      getUserData(token)
    }
  }, [])

  return (
    <div className="flex items-center justify-end p-2 absolute right-0 w-full ">
      <div
        className="w-48  absolute left-44 p-10 rounded-b-lg"
        style={{ background: "#1A7754" }}
      >
        <Link className="" href="/dashboard">
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-3xl font-bold text-white">MITI</h1>
          <h1 className="text-3xl font-bold text-white">MITI</h1>
        </div>
        </Link>
        
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          <Link href="/events/explore" legacyBehavior passHref>
            <NavigationMenuLink className=" hover:underline font-serif font-extrabold  text-lg">
              EVENTOS
            </NavigationMenuLink>
          </Link>
          
          {
            user && user.image
            && <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink className=" hover:underline font-serif font-extrabold  text-lg">

                <img
                  src={profileimg}
                  alt="profile"
                  className="h-12 w-12 rounded-full"
                />
              </NavigationMenuLink>
            </Link>
          }
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg text-green-500 hover:text-green-400">
              <NotificationsModal />
            </NavigationMenuLink>
          </Link>
          
          
        </NavigationMenuList>
            
      </NavigationMenu>
      <div>
      {isLogged && <Button onClick={handleLogout} className="border rounded-lg  mx-2 bg-[#1A7754] text-lg text-white px-4 py-2 hover:bg-[#F6F6F6] hover:text-[#1A7754]">
              CERRAR SESION
            </Button>}
            </div>
    </div>
    
  );
};

export default Header;
