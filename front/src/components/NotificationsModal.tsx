import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiConfettiDuotone } from "react-icons/pi";


const NotificationsModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <IoIosNotifications className="fill-black size-11 mt-1 bg-white p-2 shadow-xl rounded-full"/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold pb-2">Notificaciones</DialogTitle>
          <DialogDescription>
            <ul className="flex flex-col gap-3">
              <li className="font-semibold text-md">
                <IoPersonCircleSharp className="inline text-lg" /> Santi te
                agrego al evento "Juntada en la casa de Santi"
              </li>
              <li className="font-semibold text-md">
                <IoPersonCircleSharp className="inline text-lg" /> Eric modifico
                el evento "Encuentro en Rabia Bar"
              </li>
              <li className="font-semibold text-md">
                <GiPayMoney className="inline text-lg" /> Juan completo el
                ultimo gasto restante. No tienes saldos restantes{" "}
                <PiConfettiDuotone className="inline text-lg" />
              </li>
              <li className="font-semibold text-md">
                <FaRegCheckCircle className="inline text-lg" /> Caro confirmo su
                asistencia a tu evento
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationsModal;
