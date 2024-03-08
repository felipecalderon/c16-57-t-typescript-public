import React from "react";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center mx-auto place-content-center justify-center"
      style={{ backgroundColor: "#F4D977"}}
    >
      <h2 className="text-8xl text-center text-wrap w-75 my-12">TU PRÓXIMA SALIDA <br/> ESTÁ ACA</h2>

      <div className="w-full py-10">
        <SearchBar />
      </div>
      <div className="w-full flex items-center justify-center">
        <Button className="w-64 text-xl p-2"> <Link href="/events/explore" >Explorar Eventos</Link></Button>
      </div>
    </div>
  );
};

export default Cta;
