import RegisterForm from "@/components/forms/register-form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-400">
      <div className="flex rounded-3xl bg-white">
        <div className="w-96 h-96 bg-white flex items-center flex-col pt-12 gap-3 rounded-l-3xl">
          <h2 className="text-2xl font-bold text-teal-900">Hola de vuelta!</h2>
          <RegisterForm />
        </div>
        <div className="w-96 h-96 bg-green-400 rounded-3xl">
          <div className="h-72 flex items-center flex-col justify-center gap-3">
            <h2 className="text-2xl font-bold text-cyan-900">
              Bienvenido a MITI!
            </h2>
            <div>
              <p className="inline font-semibol text-teal-900">
                ¿Ya tienes cuenta?{" "}
              </p>
              <Link
                href="/auth/login"
                className="text-sky-600 hover:underline hover:text-sky-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
