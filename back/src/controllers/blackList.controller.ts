import { Request, Response } from "express";
import { manageBlacklist } from "../services/blackList.service";

export const inserBlackList = async (req: Request, res: Response) => {
  try {
    const token = req.headers['Auth-Token'] || req.headers['auth-token']
    if (!token){
      const listTokensLocked = await manageBlacklist();
      return res.status(200).json(listTokensLocked);
    }
    if(typeof token === 'string') {
       const newTokenBlock = await manageBlacklist(token);
       return res.status(200).json(newTokenBlock);
    }
    return res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ error: "Error al insertar token caducado" });
  }
};
