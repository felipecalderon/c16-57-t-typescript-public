import axiosInstance from '@/lib/axios-config';
import { dateFormat } from '@/lib/date-format';
import { Ieventos } from '@/lib/interfaces';
import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";

const SingleEventPage = async ({ params }: { params: { eventId: string } }) => {
    try {
        const { data }: {data: Ieventos} = await axiosInstance.get(`/api/events/${params.eventId}`)
        const {fecha, hora, mes} = dateFormat(data.startDate)
        return (
            <div className="flex min-h-screen w-full p-12">
                <div className="w-2/12 flex  my-40 items-center flex-col gap-4">
                    <h1 className="text-center font-bold text-3xl font-serif text-wrap">
                        {data.title}
                    </h1>
                    <h2 className="text-center font-semibold text-lg text-wrap">
                        {fecha}
                    </h2>
                    <h4 className="text-center font-normal text-lg text-wrap flex ">
                        <TfiLocationPin className="my-1" />

                        {data.location}
                    </h4>
                </div>
                <div className="w-10/12 p-12">
                    <div className="bg-[#F5CAD7] w-full rounded-lg shadow-2xl shadow-slate-500 my-4 p-1">
                        <div className="w-full bg-[#F5CAD7] h-max">
                            <img
                                src={data.image}
                                alt=""
                                className="w-full h-72 object-cover object-center"
                            />
                        </div>
                        <div className="p-2 ">
                            <p className="font-bold text-xl text-center font-serif">
                                ESTE EVENTO ES {data.isPrivate ? "PRIVADO" : "PUBLICO"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        return (
            <p>No se pudo obtener el detalle del evento</p>
        )
    }
}

export default SingleEventPage