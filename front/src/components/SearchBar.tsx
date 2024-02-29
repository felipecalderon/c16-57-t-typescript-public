"use client";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (event: any) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    //const { data } = axios(URL);
  };

  return (
    <div className="grid grid-cols-8 pl-3 pr-3 pb-3 mt-10 w-full ">
      <input
        type="search"
        placeholder={"Busca tu proxima salida"}
        className="relative w-96 p-2 pl-8 rounded-full col-start-3 col-span-3  outline outline-offset-5 outline-1 outline-green-600 focus:outline-none focus:ring-2 focus:ring-green-400  focus:shadow-lg focus:shadow-gray-500"
        onChange={handleInput}
      />
      <CiSearch className="absolute top-24 left-80 rigth-80 text-lg text-gray-500 "/>
    </div>
  );
};

export default SearchBar;
