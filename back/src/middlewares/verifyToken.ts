import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { envs } from "../config/plugins/envs/envs.plugin";
import { manageBlacklist } from "../services/blackList.service";

const { SECRET_JTW } = envs;
// Interfaz para el payload esperado
interface ExpectedPayload extends JwtPayload {
  userId: string;
}

interface CustomRequest extends Request {
  userId?: string;
}

export const verifyToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const listado = await manageBlacklist()
  const token = req.headers["auth-token"];
  if (!token) {
    return res
    .status(403)
    .send({ error: "Acceso denegado. No se proporcionó token." });
  }

  if(listado.includes(token as string)){
    return res.status(403).send({ error: "Token en lista Negra" });
  }

  const [_bearer, tokenJWT] = token.toString().split(" ");

  return verify(tokenJWT, SECRET_JTW, (err, decodedPayload) => {
    if (err) {
      return res.status(401).send({ error: "Token inválido." });
    }

    const payload = decodedPayload as ExpectedPayload;
    // Asegurarse de que el payload contenga el id del usuario
    if (payload && payload.userId) {
      req.userId = payload.userId;
      next();
    } else {
      return res
        .status(401)
        .send({ error: "Token inválido. ID de usuario no encontrado." });
    }
  });
};
