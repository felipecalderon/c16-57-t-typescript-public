'use client'
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
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const valuesToSend = {
        ...values,
      };
      const { data } = await axios.post('http://localhost:3001/api/auth/register', valuesToSend)
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                  className="h-8 w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="h-8 w-42 rounded-10 m-auto p-auto bg-gray-900 hover:bg-gray-700 shadow-md hover:shadow-gray-400"
          type="submit"
        >
          Registrarme
        </Button>
      </form>
    </Form>
  );
}