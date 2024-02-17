import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUserDB } from "../services/user.service";
import { generateToken } from "../utils/generateToken";
import User from "../data/mongo/models/user.model";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Credenciales incorrectas." });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Credenciales incorrectas." });
    }

    // Generar token
    const token = generateToken(user.id);

    // Establecer el token en una cabecera HTTP y enviar la respuesta
    res.header("Auth-Token", `Bearer ${token}`);
    res.status(200).json({ message: "Inicio de sesión exitoso." });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validar datos (PENDIENTE)

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya existe." });
    }

    // Hashear contraseña y crear usuario
    const newUser = await createUserDB({
      ...req.body,
      password: await bcrypt.hash(password, 10),
    });

    // Generar token
    const token = generateToken(newUser.id);

    res.header("Auth-Token", `Bearer ${token}`);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario." });
  }
};
