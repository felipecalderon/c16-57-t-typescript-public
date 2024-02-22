'use client'
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

const formSchema = z
  .object({
    email: z.string().email({ message: "Debe ser un email valido" }),
    password: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Las passwords no son iguales",
      path: ["passwordConfirm"],
    }
  );

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      fetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ values }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
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
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
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
                className="h-8 w-3/4 rounded-10 m-auto p-auto bg-green-500 hover:bg-green-400 shadow-md hover:shadow-gray-400"
                type="submit"
              >
                Submit
              </Button>
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
}