"use client";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (event: any) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    //const { data } = axios(URL);
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-2/4 flex bg-white rounded-full ">
        <input
          type="text"
          placeholder="Cine en Buenos Aires"
          className=" w-full border-gray-300 rounded-l-full text-3xl text-center"
          onChange={handleInput}
        />

        <Button className="bg-green-400  rounded-r-full text-white hover:shadow-lg size-1/12 hover:shadow-gray-300 hover:bg-green-300">
          <CiSearch className="size-full " />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
