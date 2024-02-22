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
import axios from "axios";

const formSchema = z
  .object({
    email: z.string().email({ message: "Debe ser un email valido" }),
    password: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
    passwordConfirm: z.string(),
    name: z.string(),
    location: z.string(),
    age: z.number(),
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
      password: "",
      passwordConfirm: "",
      name: "",
      location: "",
      age: 0
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data } = await axios.post('http://localhost:3001/api/auth/register', {
        name: 'Pepito',
        age: 22,
        email: form.getValues('email'),
        location: 'Santiago',
        password: form.getValues('password')
      }
      )
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          Crear cuenta
        </Button>
      </form>
    </Form>
  );
}