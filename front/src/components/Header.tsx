"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-center items-center justify-around p-2">
      <h1 className="text-2xl font-bold text-green-500">MitiApp</h1>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          <Link href="/misEventos" legacyBehavior passHref>
            <NavigationMenuLink className="text-green-500 hover:text-green-400 hover:underline">
              Mis eventos
            </NavigationMenuLink>
          </Link>
          <Link href="/grupos" legacyBehavior passHref>
            <NavigationMenuLink className="text-green-500 hover:text-green-400 hover:underline">
              Grupos
            </NavigationMenuLink>
          </Link>
          <Link href="/Perfil" legacyBehavior passHref>
            <NavigationMenuLink className="text-green-500 hover:text-green-400 hover:underline">
              Perfil
            </NavigationMenuLink>
          </Link>
          <Link href="/notificaciones" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg text-green-500 hover:text-green-400">
              <IoIosNotifications />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
