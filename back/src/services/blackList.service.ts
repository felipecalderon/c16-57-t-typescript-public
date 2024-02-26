import BlackList from "../data/mongo/models/blacklist.model";
import { decodeToken } from "../utils/decodeToken";

export const manageBlacklist = async (bearerToken?: string) => {
  try {
    let blackList = await BlackList.findOne();

    // Si no existe el documento y existe token, se crea un doc
    if (!blackList && bearerToken) {
      blackList = new BlackList({ list: [bearerToken] });
      await blackList.save();
      return blackList.list; // Devuelve la lista actualizada con el nuevo token
    } else if (!blackList) {
      // Si no hay lista y no se está añadiendo un token, se retorna una lista vacía
      return [];
    }

    // Añade el nuevo token si está en los parámetros y no existe en la lista
    if (bearerToken && !blackList.list.includes(bearerToken)) {
      blackList.list.push(bearerToken);
    }

    // limpieza de tokens expirados
    const currentTime = Math.floor(Date.now() / 1000);
    const updatedTokenList = blackList.list.filter((token) => {
      const decodedToken = decodeToken(token);
      return decodedToken && decodedToken.exp && decodedToken.exp > currentTime;
    });

    // Actualiza y guarda si hay cambios
    if (updatedTokenList.length !== blackList.list.length || bearerToken) {
      blackList.list = updatedTokenList;
      await blackList.save();
    }

    return blackList.list; // Devuelve la lista actualizada
  } catch (error) {
    throw error;
  }
};
