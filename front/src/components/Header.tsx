"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NotificationsModal from "./NotificationsModal";

const Header = () => {
  return (
    <div className="flex items-center justify-end p-2 ">
      <div className="w-48  absolute left-44 p-10 rounded-b-lg" style={{"background": "#1A7754"
}}>
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-3xl font-bold text-white">MITI</h1>
          <h1 className="text-3xl font-bold text-white">MITI</h1>
      </div>
      </div>
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
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink className="text-green-500 hover:text-green-400 hover:underline">
              Perfil
            </NavigationMenuLink>
          </Link>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg text-green-500 hover:text-green-400">
              <NotificationsModal/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>

    </div>
  );
};

export default Header;
