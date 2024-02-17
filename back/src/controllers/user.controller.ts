import { IUser } from "../config/interfaces/user.interface";
import User from "../data/mongo/models/user.model";
import bcrypt from "bcrypt";
import {
  createUserDB,
  deleteUserDB,
  getUsersDB,
  updateUserDB,
} from "../services/user.service";
import { Request, Response } from "express";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    // Buscar usuario si existe id en req.query
    const { userId } = req.query;
    if (userId) {
      const user = await getUsersDB(userId as string); // Obtiene usuarios del servicio
      if (!user) res.status(404).json({ error: "Usuario no encontrado" });
      else res.status(200).json(user);
      return user;
    }

    // Buscar todos los usuarios
    const users = await User.find().select("-password"); //Extrae password en la respuesta
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al buscar usuarios" });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const {
      name,
      age,
      email,
      password,
      location,
      interestIds,
      events,
      expenses,
    } = req.body;
    // Hashear la contraseña antes de guardar el usuario
    const saltRounds = 10; // Cantidad de saltos para encriptar el hash
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Guardar usuario en DB
    const newUser = createUserDB({
      name,
      age,
      email,
      password: hashedPassword,
      location,
      interestIds,
      events,
      expenses,
    } as IUser);
    // PENDIENTE: validar datos antes de crear usuario
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al crear el usuario" });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    // PENDIENTE: validar datos antes de actualizar (middleware ¿?)
    const { userId } = req.query;
    const updatedUser = await updateUserDB(userId as string, req.body);
    if (!updatedUser) return res.status(404).json({ error: "Usuario no encontrado" });
    else return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al actualizar usuario" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const deletedUser = await deleteUserDB(userId as string);
    if (!deletedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al actualizar usuario" });
  }
};

//PENDIENTE: Optimizar el manejo de errores en CATCH
