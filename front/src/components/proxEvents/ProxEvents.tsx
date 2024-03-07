"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
type  ProxEventsProps = {
  eventState : string;
};
const ProxEvents: React.FC<ProxEventsProps> = ({eventState}) => {
  const events = [
    {
      startDate: "Tue Ene 07 2024 14:12:58 GMT-0300",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/cc/c9/4d/rabia-bar-barra-segundo.jpg",
        organizerId:"admin"
    },
    {
      startDate: "Tue Ene 10 2024 14:12:58 GMT-0300",
      image:
        "https://media.istockphoto.com/id/1460994983/es/foto/amigos-despreocupados-divirti%C3%A9ndose-durante-el-d%C3%ADa-de-verano-en-el-mar.jpg?s=612x612&w=0&k=20&c=uWjWf-BG8RPehaF_3kKAoIf3QEf2b2YzCQQgfhBiUx0=",
        organizerId:"admin"
      },
    {
      startDate: "Tue Ene 20 2024 14:12:58 GMT-0300",
      image:
        "https://media.istockphoto.com/id/1067423310/es/foto/grupo-%C3%A9tnico-m%C3%BAltiple-de-cinco-j%C3%B3venes-amigos-adultos-de-senderismo-a-trav%C3%A9s-de-un-campo.jpg?s=612x612&w=0&k=20&c=CJLqZR0_UYTFn8MAyDE5_1OUhpMuen-SHy6c31g8_Io=",
        organizerId:"admin"
      },
    {
      startDate: "Tue Ene 21 2024 14:12:58 GMT-0300",
      image:
        "https://media.istockphoto.com/id/1180930585/es/foto/llevar-a-una-mujer-en-un-festival-de-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=acKr68JOp5AfVYeIQ41e9Xm5xjw7_Tm44RrILZ86suc=",
        organizerId:"admin"
      },
    {
      startDate: "Tue Ene 30 2024 14:12:58 GMT-0300",
      image:
        "https://media.istockphoto.com/id/1467122489/es/foto/todos-juntos-haciendo-una-barbacoa.jpg?s=612x612&w=0&k=20&c=SUAwIKvLp_i99Fb1cRqjZA6CIjnL86ijeN4k9dDwp2U=",
        organizerId:"admin"
      },
    {
      startDate: "Tue Ene 31 2024 14:12:58 GMT-0300",
      image:
        "https://media.istockphoto.com/id/470801412/es/foto/ventiladores-en-el-estadio.jpg?s=612x612&w=0&k=20&c=ArU_t4wfh2oi7a_4H7zb4MXM4st2nFNDTyGyTMmGc0U=",
      organizerId:"admin"
      },
      {
        startDate: "Tue Ene 07 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/1489240803/es/foto/gran-grupo-de-personas-en-una-fiesta-de-concierto.jpg?s=612x612&w=0&k=20&c=iTCzI-yzV7m5J7WnFAFP-3vogRjkEc6vJwRc3wLKPz0=",
          organizerId:"asistant"
      },
      {
        startDate: "Tue Ene 10 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/1795051595/es/foto/jugador-superestrella-de-baloncesto-nacional-afroamericano-anotando-un-poderoso-gol-de-volcada.jpg?s=1024x1024&w=is&k=20&c=tkrxv3HjCmzbVf_kcJFRybw1LgetVqF8ZFw_Vr_At20=",
          organizerId:"asistant"
        },
      {
        startDate: "Tue Ene 20 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/1502843454/es/foto/chica-de-cumplea%C3%B1os.jpg?s=1024x1024&w=is&k=20&c=6hU-OzW3WwmMzIN82S-6UJ1R__kSniwcuC7LjzFy3Xg=",
          organizerId:"asistant"
        },
      {
        startDate: "Tue Ene 21 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/1488301035/es/foto/comprando-entradas-de-cine.jpg?s=1024x1024&w=is&k=20&c=WzRcn4RHPB782-MQcyWBVR_sLh02sNTXmg6QfMtRSP0=",
          organizerId:"asistant"
        },
      {
        startDate: "Tue Ene 30 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/977467396/es/foto/gente-alegre-que-se-divierten-en-el-festival-de-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=HkIGlwio7F3OC24T_2zTZKeq5EzzF6BYbXjmeDSH3VI=",
          organizerId:"asistant"
        },
      {
        startDate: "Tue Ene 31 2024 14:12:58 GMT-0300",
        image:
          "https://media.istockphoto.com/id/1447161198/es/foto/feliz-texto-de-a%C3%B1o-nuevo-2023-en-la-arena-de-la-playa-de-la-isla-amanecer-en-el-mar-punta-cana.jpg?s=612x612&w=0&k=20&c=_e-rhgoEy57YuI2KhOggSqN-wU15RB2a7MdznSuUvHs=",
        organizerId:"asistant"
        },
  ];
  return (
    <section className="w-11/12 flex justify-center gap-2 flex-wrap">
      <h3 className="w-full pl-5 pb-5 text-lg font-semibold">Enero</h3>
      {events.map((event, index) => {
        if(eventState === event.organizerId){ return (
          <Card
            className={`w-64 h-64 rounded-none m-2 flex justify-center items-center shadow-lg shadow-gray-400 cursor-pointer
            ${
              (index === 0 && "rounded-tl-xl") ||
              (index === 5 && "rounded-br-xl") ||
              (index === 2 && "rounded-tr-xl") ||
              (index === 3 && "rounded-bl-xl")
            } `}
          >
            <div
              className={`flex justify-center items-center w-full h-full rounded-none 
               ${
                (index === 0 && "rounded-tl-xl") ||
                (index === 5 && "rounded-br-xl") ||
                (index === 2 && "rounded-tr-xl") ||
                (index === 3 && "rounded-bl-xl")
              }`}
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="text-3xl font-bold text-[#F6F6F6]">
                <h3>{event.startDate.split(" ").slice(1,2)}</h3>
                <h3>{event.startDate.split(" ").slice(2,3)}</h3>
              </div>
            </div>
          </Card>
        )}
      })}
    </section>
  );
};

export default ProxEvents;
