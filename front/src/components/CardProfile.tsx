"use client";
import { storeUser } from "@/stores/user.store";
import { FaUserFriends } from "react-icons/fa";

const CardProfile = () => {
  const { user } = storeUser()
  const img =
    "https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";
  if(!user) return <p>Cargando..</p>
  return (
    <div className="w-full p-2  mt-8 flex justify-center items-center gap-5 h-96">
      <div className="w-1/4 h-80 mt-40 rounded-bl-xl ">
        <article className="bg-[#E65731] rounded-tl-xl p-1 shadow-gray-400 shadow-md">
          <img
            src={user.image ? user.image : img}
            alt="image-profile"
            className="w-full h-60 rounded-tl-md object-cover object-center"
          />
          <div className="h-16  pl-4 pt-2 bg-blue-100 ">
            <h3 className="text-xl font-bold">{user.name.toUpperCase()}</h3>
            <p className="font-semibold">{user.age} Años, de {user.location}.</p>
          </div>
        </article>
      </div>
      <div className="w-3/5 mt-40 h-80 rounded-tr-xl">
        <div className="bg-[#E65731] h-60 p-4 rounded-tr-xl shadow-gray-400 shadow-md text-[#F6F6F6]">
          <h3 className="text-xl font-bold">Intereses</h3>
          <ul className="pt-5 font-semibold">
            <li>- Voluntariado en una ONG</li>
            <li>- Yoga</li>
            <li>- Viajar</li>
            <li>- Tocar la guitarra</li>
            <li>- Hacer deportes</li>
            <li>- Tecnologia</li>
          </ul>
        </div>
        <div className="relative w-full h-28 flex justify-center items-end gap-5 rounded-bl-xl rounded-br-xl">
          <div className="bg-[#E65731] w-1/2  p-4 h-20 pt-4 rounded-bl-xl shadow-gray-400 shadow-md">
            <button className="absolute top-5 px-3 rounded-xl bg-[#1A7754] text-[#F6F6F6] hover:bg-[#399b75] hover:shadow-lg hover:shadow-gray-500 font-semibold">
              Amigos
            </button>
            <div className="flex items-center gap-2 pl-3 pt-3">
              <h4 className="font-bold text-lg text-[#F6F6F6]"> 13 </h4>
              <div className="flex">
                <FaUserFriends className="bg-[#F6F6F6] rounded-full" />
                <FaUserFriends className="bg-[#F6F6F6] rounded-full" />
                <FaUserFriends className="bg-[#F6F6F6] rounded-full" />
                <FaUserFriends className="bg-[#F6F6F6] rounded-full" />
                <FaUserFriends className="bg-[#F6F6F6] rounded-full" />
              </div>
            </div>
          </div>
          <div className="bg-[#E65731] w-1/2 h-20 p-4 rounded-br-xl shadow-gray-400 shadow-md">
            <button className="absolute top-5 px-3 bg-[#1A7754] rounded-xl text-[#F6F6F6] hover:bg-[#399b75] hover:shadow-lg hover:shadow-gray-500 font-semibold">
              Grupos
            </button>
            <h4 className="pl-3 pt-3 font-bold text-lg text-[#F6F6F6]">2</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
