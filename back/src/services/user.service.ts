import { IUser } from "../config/interfaces/user.interface";
import User from "../data/mongo/models/user.model";

export const getUsersDB = async (id?: string) => {
  try {
    // Buscar usuario si existe id en req.query
    if (id) {
      const user = await User.findById(id).select("-password"); //Extrae password en la respuesta
      if (!user) return null;
      return user;
    }

    // Buscar todos los usuarios
    const users = await User.find().select("-password"); //Extrae password en la respuesta
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUserDB = async ({
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
    // Crear instancia de usuario
    const newUser = new User({
      name,
      age,
      email,
      password,
      location,
      interestIds,
      events,
      expenses,
    });

    // PENDIENTE: validar datos antes de crear usuario
    // Guardar usuario en DB
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const updateUserDB = async (id: string, updateData: Partial<IUser>) => {
  try {
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");
    if (!user) return null;
    else return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUserDB = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    console.log({ user });
    if (!user) return null;
    else return user;
  } catch (error) {
    throw error;
  }
};
