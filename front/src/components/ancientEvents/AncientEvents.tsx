"use client ";
type AncientEventsProps = {
  eventState : string;
}
const AncientEvents: React.FC<AncientEventsProps> = ({eventState}) => {
 
  const events = [
    {
      title: "Asados con los pibes",
      startDate: "Tue Dic 07 2024 14:12:58 GMT-0300",
      description: "Tranqui asadito ",
      organizerId:"admin"
    },
    {
      title: "Joda en la quintaaaaa",
      startDate: "Tue Dic 10 2024 14:12:58 GMT-0300",
      description: "Hasta que salga el sol",
      organizerId:"admin"
    },
    {
      title: "Salida al cine",
      startDate: "Tue Dic 30 2024 14:12:58 GMT-0300",
      description: "Peli de terror",
      organizerId:"admin"
    },
    {
      title: "Concierto de Ciro",
      startDate: "Tue Dic 31 2024 14:12:58 GMT-0300",
      description: "Pogueando a full",
      organizerId:"admin"
    },
    {
      title: "Previa de cumple",
      startDate: "Tue Ene 07 2024 14:12:58 GMT-0300",
      description: "A Fondo blanco",
      organizerId:"asistant"
    },
    {
      title: "Juntada en casa",
      startDate: "Tue Dic 20 2024 14:12:58 GMT-0300",
      description: "Tranqui tranqui",
      organizerId:"asistant"
    },
    {
      title: "Previa boliche",
      startDate: "Tue Dic 8 2024 14:12:58 GMT-0300",
      description: "Calentando motores",
      organizerId:"asistant"
    },
    {
      title: "Recital de Slash",
      startDate: "Tue Nov 31 2024 14:12:58 GMT-0300",
      description: "Aguanten los guns",
      organizerId:"asistant"
    },
  ];
  return (
    <section className="w-full flex justify-center">
      <section className="flex flex-col justify-center gap-5 w-11/12 justify-start ">
        <h2 className="pl-2 text-lg font-bold">Más antiguos</h2>
        <section className="w-11/12 flex justify-center flex-wrap gap-5 ">
          {events.map((event, index) => {
            if(event.organizerId === eventState){ return (
              <div
                key={index}
                className="w-80 flex gap-3 p-4 border rounded-xl shadow-lg shadow-gray-300 hover:border-[#1A7754] hover:shadow-[#1A7754]"
              >
                <div className=" text-xl font-bold w-24 h-24 border flex flex-col justify-center items-center rounded-lg bg-[#F5CAD7]">
                  <h3 className="text-2xl">
                    {event.startDate.split(" ").slice(1, 2)}
                  </h3>
                  <h3 className="text-2xl">
                    {event.startDate.split(" ").slice(2, 3)}
                  </h3>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <h4 className="font-semibold">{event.description}</h4>
                </div>
              </div>
            )}
          })}
        </section>
      </section>
    </section>
  );
};

export default AncientEvents;
