"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
type SetEventStateFunction = (newState: string) => void;
type SetAncientFunction = (newState: boolean) => void;
type MenuMyEventsProps = {
  setEventState: SetEventStateFunction,
  setAncient: SetAncientFunction,
};


const MenuMyEvents: React.FC<MenuMyEventsProps> = ({ setEventState, setAncient }) => {
  return (
    <NavigationMenu className="border-r-4 border-[#1A7754] p-2 flex justify-start flex-col">
      <NavigationMenuList className="flex gap-10 flex-col">
        <Link href="" legacyBehavior passHref>
          <NavigationMenuLink className="text-green-500 hover:text-green-400 ">
            <p
              onClick={()=>{
                setAncient(false);
                setEventState("admin");
              }}
              className="text-black text-md w-52 font-semibold text-left hover:underline decoration-[#1A7754]"
            >
              Administrador
            </p>
          </NavigationMenuLink>
        </Link>
        <Link href="" legacyBehavior passHref>
          <NavigationMenuLink className="text-green-500 hover:text-green-400 ">
            <p
              onClick={()=>{
                setAncient(false);
                setEventState("asistant");
              }}
              className="text-black text-md w-52 font-semibold text-left hover:underline decoration-[#1A7754]"
            >
              Asistente
            </p>
          </NavigationMenuLink>
        </Link>
        <Link href="" legacyBehavior passHref>
          <NavigationMenuLink className="text-green-500 hover:text-green-400">
            <p
              onClick={()=>setAncient(true)}
              className="bg-white text-black text-md w-52 font-semibold text-left hover:underline decoration-[#1A7754]"
            >
              Proximos en tu agenda
            </p>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuMyEvents;
