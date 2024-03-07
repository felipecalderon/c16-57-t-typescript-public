import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import LoginForm from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[#1A7754] flex-col">
      <div className="w-full py-5 px-8 text-5xl font-bold text-white">
        <h2>Miti</h2>
        <h2>Miti</h2>
      </div>
      <div className="flex rounded-3xl bg-white">
        <div className="w-96 h-96 bg-white flex items-center flex-col pt-12 gap-3 rounded-l-3xl">
          <h2 className="text-2xl font-bold text-teal-900">Hola de vuelta!</h2>
          <div className="flex gap-2">
            <span className="py-1 px-2 bg-white rounded-full shadow-md shadow-gray-300">
              <FaGoogle className="inline text-lg" />
            </span>
            <span className="py-1 px-2 bg-white rounded-full shadow-md shadow-gray-300">
              <FaApple className="inline text-lg" />
            </span>
          </div>
          <LoginForm />
        </div>
        <div className="w-96 h-96 bg-[#F4D977] rounded-3xl">
          <div className="h-72 flex items-center flex-col justify-center gap-3">
            <h2 className="text-2xl font-bold text-black">
              Bienvenido a MITI!
            </h2>
            <div>
              <p className="inline font-semibol text-teal-900">
                ¿No tenes cuenta?{" "}
              </p>
            </div>
            <div>
              <Button
                asChild
                className="h-8 rounded-lg px-8 bg-gray-900 shadow-md hover:shadow-yellow-100 "
                type="submit"
              >
                <Link href="/auth/register"> Registrarse</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
