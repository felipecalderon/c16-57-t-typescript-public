"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
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


import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"


type Checked = DropdownMenuCheckboxItemProps["checked"]

const formSchema = z.object({
  title: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  location: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  startDate: z.date({
    required_error: "Una fecha es requerida",
  }),
  endDate: z.date({
    required_error: "Una fecha es requerida",
  }),
  description: z.string().min(3, { message: "Debe ser mayor a 3 caracteres" }),
  isPrivate: z.boolean().default(false).optional(),
  tags: z.array(z.string()).optional(),
});

const Create = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",

      description: "",
      isPrivate: false,
      tags: [],
    },
  });

  const [tags, setTags] = useState<string[]>([]);
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const organizerId = localStorage.getItem("token")!;
    values.tags = tags;

    try {
      const response = await axios.post(
        `http://localhost:3001/api/events/`,
        values,
        {
          headers: {
            "auth-token": organizerId,
          },
        }
      );
      if (response.status === 200) {
        console.log("Evento creado");
        location.href = "http://localhost:3000/dashboard";
      }
      // Resto del código después de la solicitud POST
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
    }
  };

  

  const [isNext, setIsNext] = useState(false);

  const handleNext = () => {
    setIsNext(!isNext);
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
              <div className={isNext ? "w-full  hidden " : "w-full  unhidden"}>
                <p className="text-2xl font-bold py-2 text-teal-900">
                  Los campos con * son obligatorios
                </p>
                <div>
                  <FormField
                    control={form.control}
                    name="isPrivate"
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de evento *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre"
                          {...field}
                          type="text"
                          className="h-8 w-full my-4 bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lugar del evento *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Lugar"
                          {...field}
                          type="text"
                          className="h-8 w-full my-4 bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between my-4">
                  <FormField
                    control={form.control}
                    name="startDate"
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
                              disabled={(date) => date < new Date()}
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
                    name="endDate"
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
                              disabled={(date) => date < new Date()}
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
              </div>
              <div className={!isNext ? "w-full  hidden " : "w-full  unhidden"}>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripcion *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descripcion"
                          {...field}
                          className="h-8 w-full bg-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="w-full bg-slate-200"
                            >
                              {"Selecciona tags"}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-auto p-0 "  align="center">
                            
                            <DropdownMenuCheckboxItem
                              
                              checked={tags.includes("Musica")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, "Musica"]);
                                } else {
                                  setTags(tags.filter((tag) => tag !== "Musica"));
                                }
                              }}
                            >
                              Musica
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                              
                              checked={tags.includes("Arte")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, "Arte"]);
                                } else {
                                  setTags(tags.filter((tag) => tag !== "Arte"));
                                }
                              }}
                            >
                              Arte
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                              
                              checked={tags.includes("Gastronomia")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, "Gastronomia"]);
                                } else {
                                  setTags(tags.filter((tag) => tag !== "Gastronomia"));
                                }
                              }}
                            >
                              Gastronomia
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                              
                              checked={tags.includes("Nocturna")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, "Nocturna"]);
                                } else {
                                  setTags(tags.filter((tag) => tag !== "Nocturna"));
                                }
                              }}
                            >
                              Nocturna
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                              
                              checked={tags.includes("Diurna")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, "Diurna"]);
                                } else {
                                  setTags(tags.filter((tag) => tag !== "Diurna"));
                                }
                              }}
                            >
                              Diurna
                            </DropdownMenuCheckboxItem>


                            
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>

                  )}



                />
                </div>
                
                


              <div
                className={
                  !isNext
                    ? "w-full flex justify-end"
                    : "w-full  flex justify-between"
                }
              >
                <Button
                  className={
                    isNext
                      ? "py-3  rounded-lg border w-max  my-3 flex  shadow-sm space-y-0"
                      : "hidden"
                  }
                  onClick={handleNext}
                  type="button"
                >
                  Atras
                </Button>
                <Button
                  className={
                    isNext
                      ? "hidden"
                      : "py-3  rounded-lg border w-max  my-3 flex  shadow-sm space-y-0 content-end"
                  }
                  onClick={handleNext}
                  type="button"
                >
                  Siguiente
                </Button>
                <Button
                  className={
                    !isNext
                      ? "hidden"
                      : "py-3  rounded-lg border w-max  my-3 flex  shadow-sm space-y-0 "
                  }
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
