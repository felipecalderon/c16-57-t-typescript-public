import RegisterForm from "@/components/forms/register-form";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[#1A7754] flex-col">
      <div className="w-full py-5 px-8 text-5xl font-bold text-white">
        <h2>Miti</h2>
        <h2>Miti</h2>
      </div>
      <div className="flex rounded-3xl bg-white">
        <div className="w-96 h-96 bg-white flex items-center flex-col pt-4 gap-2 rounded-l-3xl">
          <h2 className="text-2xl font-bold text-teal-900">Bienvenido a Miti</h2>
          <p>Creá tu cuenta</p>
          <div className="flex gap-2">
           <span className="py-1 px-2 bg-white rounded-full shadow-md shadow-gray-300"><FaGoogle className="inline text-lg"/></span>
           <span className="py-1 px-2 bg-white rounded-full shadow-md shadow-gray-300"><FaApple className="inline text-lg"/></span>
          </div>
          <RegisterForm />
        </div>
        <div className="w-96 h-96 bg-[#F4D977] rounded-3xl">
          <div className="h-72 flex items-center flex-col justify-center gap-3">
            <h2 className="text-2xl font-bold text-black">
              ¡Hola de vuelta!
            </h2>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="inline font-semibol text-black">
                ¿Ya tenés cuenta?{" "}
              </p>
              <Link
              href="/auth/login"
              >
              <button className="text-sm bg-gray-900 h-8 w-42 px-2 font-semibold text-white hover:shadow-lg hover:shadow-yellow-100 hover:bg-gray-700 rounded-md">
                Iniciar Sesion
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
