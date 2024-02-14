import express from "express";
import cors from "cors";
import morgan from "morgan";

import { envs } from "./config/plugins/envs/envs.plugin";

const app = express();
//*Middlewares===============
envs.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use(express.json());

//*Middlewares===============

//?Routes====================

//?Routes====================

export default app;
