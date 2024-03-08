'use client'
import { DialogContent } from "@/components/ui/dialog";
import { Ieventos } from "@/lib/interfaces";
import { dateFormat } from "@/lib/date-format";
import { RiMapPin2Fill } from "react-icons/ri";
import { storeUser } from "@/stores/user.store";
import axiosInstance from "@/lib/axios-config";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function DetalleDialog({ event, onClick }: { event: Ieventos, onClick: () => void  }) {
  const { fecha, hora, mes } = dateFormat(event.startDate)
  const { user } = storeUser()
  const route = useRouter()
  const [messages, setMessages] = useState({
    msg: '',
    error: ''
  })
  const token = typeof window !== 'undefined' ? window.localStorage.getItem("token") : undefined

  const handleJoinEvent = async () => {
    try {
      const usuarioAsignado = await axiosInstance.post(`/api/events/new-guest/${event._id}`, {
        guestId: user?._id
      }, {
        headers: {
          "Auth-Token": token
        }
      })
      route.refresh()
      onClick()

      setMessages({...messages, msg: 'Unido al evento exitosamente! 👌'})
    } catch (error) {
      if(error instanceof AxiosError){
        setMessages({...messages, error: error.response?.data.error})
      }
      console.log(error);
    }
  }

  const handleRemoveGuest = async () => {
    try {
      const usuarioAsignado = await axiosInstance.post(`/api/events/remove-guest/${event._id}`, {
        guestId: user?._id
      }, {
        headers: {
          "Auth-Token": token
        }
      })
      route.push('/dashboard')
      onClick()
      setMessages({...messages, msg: 'Saliste del evento exitosamente! 😎'})
    } catch (error) {
      if(error instanceof AxiosError){
        setMessages({...messages, error: error.response?.data.error})
      }
      console.log(error);
    }
  }
  return (
    <DialogContent className="p-0 max-w-5xl">
      <div className="flex flex-row">
        <div className="w-1/2 px-20 py-20">
          <p className="mb-10">{fecha} {hora}hrs</p>
          <p className="text-4xl">{event.title}</p>
          <p className="mb-10"><RiMapPin2Fill className="inline" /> {event.location}</p>
          <p className="text-2xl">Sobre este evento</p>
          <p className="font-extralight mb-10">{event.description}</p>
          <p>Invitados: </p>
          <p>
            {
              event.guestIds.map(({ name }) => {
                return (
                  <p>{name}</p>
                )
              })
            }
          </p>
          <div className="flex flex-col justify-end items-end h-20">
            <button className="px-3 py-2 bg-[#1A7754] text-white rounded-lg"
              onClick={handleJoinEvent}>Unirse</button>
          </div>
        </div>
        <div className="w-1/2 px-20 py-0 rounded-l-3xl shadow-xl bg-[#F4D977] flex flex-col items-center">
          <div className="bg-white w-fit rounded-b-2xl shadow-lg mb-10">
            <img src={event.organizerId.image} alt="" className="rounded-full w-36" />
            <p className="text-center text-2xl font-light">{event.organizerId.name}</p>
          </div>
          <p className="mb-3">Listas de Gastos</p>
          {
            event.expenses.map(({ description, amount }) => {
              return (
                <div className="border-red-500 border-2 w-48">
                  <p className="px-6">{description} - ${amount}</p>
                </div>
              )
            }).slice(0, 4)
          }
          <div className="flex justify-start items-end h-20">
            <button onClick={handleRemoveGuest} className="px-3 py-2 bg-black text-white rounded-lg">Descartar</button>
          </div>
        </div>
      </div>
      <div className="text-center">
        { messages.error !== '' && <p className="text-red-600 p-3">{messages.error}</p> }
        { messages.msg !== '' && <p className="text-green-600 p-3">{messages.msg}</p> }
        </div>
      {
      /* <section>
          <div className="flex justify-between ">
            <div className="space-y-4">
              <DialogTitle className="text-3xl font-bold ">{event.title}</DialogTitle>
              <h2 className="text-center text-2xl font-semibold flex py-2">
                <TfiLocationPin className="my-1" />
                {event.location}
              </h2>

              <div className="flex w-max space-x-2 ">
                <div className="flex">
                  <CalendarIcon className=" size-6" />
                  <p className="text-center font-semibold text-lg px-2 ">
                    {" "}
                    fecha inicio
                  </p>
                </div>
                <div className="flex">
                  <CalendarIcon className="size-6" />
                  <p className="text-center font-semibold text-lg px-2  ">
                    {" "}
                    fecha fin
                  </p>
                </div>
              </div>
              <div className="px-2 flex items-center space-x-2 ">
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <IoMdShare className="size-8 p-1" />
                </button>
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <TiHeartOutline className="size-8 p-1" />
                </button>
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <FaPlus className="size-8 p-1" />
                </button>
              </div>
            </div>
            <DialogOverlay className="border shadow-md rounded-md h-max p-3  ">
              <h2
                className="
                font-bold
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1
                text-center
                "
              >
                Organizador
              </h2>
              <img
                src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
                alt="evento"
                className="h-40 w-40 rounded-full my-2"
              />

              <h4 className="text-center font-semibold">
                Nombre de organizador
              </h4>
            </DialogOverlay>
          </div>
          <div className="w-full border border-black bg-green-500 my-3 p-4 rounded-lg bg-opacity-65">
            <h2 className="text-2xl font-bold">Sobre el evento</h2>
            <p className="text-justify">
              {event.description}
            </p>
          </div>
          <div className="w-full flex">
            <div className="bg-gray-200 my-3 p-4 w-1/2 rounded-md bg-opacity-75">
              <h3
                className="text-center
                font-bold
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1"
              >
                Opiniones
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore corporis magni omnis ea non aut, voluptatem sint
                deleniti fugit voluptates nam cumque explicabo enim praesentium
                iure natus quasi ipsa velit!
              </p>
            </div>
            <div className=" p-3 m-3 w-max ">
              <div className="grid grid-cols-2 place-items-center ">
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <GiKnifeFork className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <BsMoonStars className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <CiSun className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <LiaTheaterMasksSolid className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <MdOutlineMusicNote className="size-8 " />
                </div>
              </div>
            </div>
            <div className="p-3 m-3 w-1/4 bg-gray-200 bg-opacity-75 rounded-md h-1/2">
              <h3
                className="text-center
                font-bold
                
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1"
              >
                Gasto promedio
              </h3>
              <p
                className="
                text-center
                w-max
                px-1
                "
              >
                $100.00
              </p>
            </div>
          </div>
        </section>

        <DialogFooter>
          <div className="flex justify-center space-x-4 w-full">
            <Button
              className="h-10 w-36 font-medium rounded-full p-4 text-base bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-gray-400"
              type="submit"
            >
              Unirme
            </Button>
            <Button
              className="h-10 w-36 font-medium rounded-full p-4 text-base bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-gray-400"
              type="submit"
            >
              No me interesa
            </Button>
          </div>
        </DialogFooter> */}
    </DialogContent>
  )
};