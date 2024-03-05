"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NotificationsModal from "./NotificationsModal";
const Header = () => {
  const profileimg = "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
  


  return (
    <div className="flex items-center justify-end p-2 absolute right-0 w-full ">
      <div
        className="w-48  absolute left-44 p-10 rounded-b-lg"
        style={{ background: "#1A7754" }}
      >
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-3xl font-bold text-white">MITI</h1>
          <h1 className="text-3xl font-bold text-white">MITI</h1>
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          <Link href="/misEventos" legacyBehavior passHref>
            <NavigationMenuLink className=" hover:underline font-serif font-extrabold  text-lg">
              MIS EVENTOS
            </NavigationMenuLink>
          </Link>
          <Link href="/grupos" legacyBehavior passHref>
            <NavigationMenuLink className=" hover:underline font-serif font-extrabold  text-lg">
              GRUPOS
            </NavigationMenuLink>
          </Link>
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink className=" hover:underline font-serif font-extrabold  text-lg">
              <img
                src={profileimg}
                alt="profile"
                className="h-12 w-12 rounded-full"
                />
                
            </NavigationMenuLink>
          </Link>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg text-green-500 hover:text-green-400">
              <NotificationsModal />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
