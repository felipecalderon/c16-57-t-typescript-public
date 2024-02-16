import { Request, Response, Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller";

const route = Router();

route.get("/", async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const users = await getUsers(userId as string);
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res
        .status(500)
        .json({ error: "Ocurrió un error al crear el Usuario" });
    }
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    return res.status(200).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res
        .status(500)
        .json({ error: "Ocurrió un error al crear el Usuario" });
    }
  }
});

route.put("/", async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const users = await updateUser(userId as string, req.body);
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res
        .status(500)
        .json({ error: "Ocurrió un error al actualizar usuario" });
    }
  }
});

route.delete("/", async (req: Request, res: Response) => {
    try {
      const { userId } = req.query;
      const users = await deleteUser(userId as string);
      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res
          .status(500)
          .json({ error: "Ocurrió un error al borrar usuario" });
      }
    }
  });

export default route;
