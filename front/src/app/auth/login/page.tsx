"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
    email: z.string().email({ message: "Debe ser un email válido" }),
    password: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  });

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

   const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', //Cambiar a Redux si es necesario y usar axios.
       {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
   
      console.error('Error en la solicitud:', response.statusText);
      return;
    }

    const data = await response.json();
    console.log(data);
    /* 
     Aca agregar funcionalidad post-validacion del login.
    */
    
    

  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};
  

  return (
    <section className="flex justify-center items-center h-screen bg-gray-400">
      <div className="flex rounded-3xl bg-white">
        <div className="w-96 h-96 bg-white flex items-center flex-col pt-12 gap-3 rounded-l-3xl">
          <h2 className="text-2xl font-bold text-teal-900">Hola de vuelta!</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" w-3/4 flex flex-col gap-4 mt-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        type="email"
                        className="h-8 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                        className="h-8 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="h-8 w-2/4 rounded-full m-auto py-4 bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-gray-400"
                type="submit" disabled={!form.formState.isValid}
              >
      
                Iniciar sesion
                
              </Button>
              <div className="mx-auto">
                <Link
                  href="/auth/forgot-password"
                  className="text-sky-600 hover:underline text-xs text-center hover:text-sky-500"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </form>
          </Form>
        </div>
        <div className="w-96 h-96 bg-green-400 rounded-3xl">
          <div className="h-72 flex items-center flex-col justify-center gap-3">
            <h2 className="text-2xl font-bold text-cyan-900">
              Bienvenido a MITI!
            </h2>
            <div>
              <p className="inline font-semibol text-teal-900">
                ¿No tenes cuenta?{" "}
              </p>
            </div>
            <div>
              
                <Button asChild
                  className="h-8  rounded-full  px-8 bg-green-500 hover:bg-green-600 shadow-md  hover:shadow-black-400 " 
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
