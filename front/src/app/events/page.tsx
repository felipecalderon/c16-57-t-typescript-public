"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  nombre: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  lugar: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  fechaInicio: z.date({
    required_error: "Una fecha es requerida",
  }),
  fechaFin: z.date({
    required_error: "Una fecha es requerida",
  }),
  descripcion: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  esPrivado: z.boolean().default(false).optional(),
  tags: z.array(z.string()).optional(),
});

const Create = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      lugar: "",

      descripcion: "",
      esPrivado: false,

    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    //fetch post axios
    console.log(values);
    try {
      const  response = await axios.post(
        `http://localhost:3001/api/events/`,
        values
      );
      const data = response.headers;
      console.log(data);
    } catch (error) {
      console.log(values);
    }
  };
  const [isNext, setIsNext] = useState(false);

  const handleNext = () => {
    setIsNext(true);
  };

  return (
    <section className="flex justify-center items-center h-screen w-full  bg-white">
      <div className="flex rounded-3xl w-full  justify-center ">
        <div className="w-3/6 bg-white rounded-3xl content-center flex items-center border flex-col pt-12 gap-3 ">
          
            <h2 className="text-2xl font-bold text-teal-900">
              Primero completemos estos campos
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className=" w-3/4 flex flex-col gap-4 mt-5"
              >
                <div className="flex justify-between ">
                  <p className="text-2xl font-bold py-2 text-teal-900">
                    Los campos con * son obligatorios
                  </p>
                  <FormField
                    control={form.control}
                    name="esPrivado"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border w-max p-3 border-none space-y-0">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-6 w-12 "
                          />
                        </FormControl>
                        <div className="mx-3">
                          {field.value ? "Evento privado" : "Evento público"}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de evento *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre"
                          {...field}
                          type="text"
                          className="h-8 w-full bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lugar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lugar del evento *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Lugar"
                          {...field}
                          type="text"
                          className="h-8 w-full bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="fechaInicio"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ">
                        <FormLabel>Fecha de inicio *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl className="bg-slate-200">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Selecciona una fecha</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 " align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {/* <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fechaFin"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Fecha fin de evento *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl className="bg-slate-200">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Selecciona una fecha</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {/* <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="descripcion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripcion *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Descripcion"
                          {...field}
                          type="text"
                          className="h-8 w-full bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <div className="w-full  flex justify-end">
                  <Button
                    className="py-3  rounded-lg border w-max  my-3 flex  shadow-sm space-y-0"
                    type="submit"
                  >
                    Crear evento
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      
    </section>
  );
};

export default Create;
