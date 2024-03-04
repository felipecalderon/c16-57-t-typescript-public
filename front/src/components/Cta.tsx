import React from "react";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <div
      className="h-full w-full flex flex-col items-center mx-auto place-content-center justify-center p-4"
      style={{ backgroundColor: "#F4D977" }}
    >
      <h2 className="text-4xl font-bold text-center">Encontra lo que buscas</h2>

      <div className="w-full py-10">
        <SearchBar />
      </div>
      {
        //button explorar eventos y que te lleve a la pagina de eventos
      }
      <div className="w-full flex items-center justify-center">
        <Button className="w-64 text-xl p-2">Explorar Eventos</Button>
      </div>
    </div>
  );
};

export default Cta;
