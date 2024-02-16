import { IUser } from "../config/interfaces/user.interface";
import User from "../data/mongo/models/user.model";
import bcrypt from "bcrypt";

export const getUsers = async (id?: string) => {
  try {
    // Buscar usuario si existe id en req.query
    if (id) {
      const user = await User.findById(id).select("-password"); //Extrae password en la respuesta
      if (!user) throw new Error("No se encontró el usuario");
      return user;
    }

    // Buscar todos los usuarios
    const users = await User.find().select("-password"); //Extrae password en la respuesta
    return users;
  } catch (error) {
    console.error(error);
    throw "Hubo un error al buscar usuarios";
  }
};

export const createUser = async ({
  name,
  age,
  email,
  password,
  location,
  interestIds,
  events,
  expenses,
}: IUser) => {
  try {
    // Hashear la contraseña antes de guardar el usuario
    const saltRounds = 10; // Cantidad de saltos para encriptar el hash
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear instancia de usuario
    const newUser = new User({
      name,
      age,
      email,
      password: hashedPassword,
      location,
      interestIds,
      events,
      expenses,
    });

    // PENDIENTE: validar datos antes de crear usuario
    // Guardar usuario en DB
    await newUser.save();
    return "Usuario creado exitosamente";
  } catch (error) {
    console.error(error);
    throw "Hubo un error al crear el usuario";
  }
};

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
  try {
    // PENDIENTE: validar datos antes de actualizar (middleware ¿?)
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");
    if (!user) {
      throw "No se encontró el usuario";
    }
    return user;
  } catch (error) {
    console.error(error);
    throw "Error al actualizar el usuario";
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw "No se encontró el usuario";
    }
    return "Usuario eliminado exitosamente";
  } catch (error) {
    console.error(error);
    throw "Error al eliminar el usuario";
  }
};

//PENDIENTE: Optimizar el manejo de errores en CATCH
