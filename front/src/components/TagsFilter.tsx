"use client";
import Link from "next/link";

const TagsFilter = () => {
  return (
    <div className="w-ful flex justify-center items-center justify-evenly pt-6">
      <button className="bg-green-400 rounded-xl px-2 text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-green-300">
        <Link href="/recitales">#Recitales</Link>
      </button>
      <button className="bg-green-400 rounded-xl px-2 text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-green-300">
        <Link href="/boliches">#Boliches</Link>
      </button>
      <button className="bg-green-400 rounded-xl px-2 text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-green-300">
        <Link href="/fiestas">#Fiestas</Link>
      </button>
      <button className="bg-green-400 rounded-xl px-2 text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-green-300">
        <Link href="/previas">#Previas</Link>
      </button>
    </div>
  );
};

export default TagsFilter;
