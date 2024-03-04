import express from "express";
import cors from "cors";
import morgan from "morgan";

import { envs } from "./config/plugins/envs/envs.plugin";
import routes from './routes/index'
const app = express();
//*Middlewares===============
envs.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(cors({ origin: '*', exposedHeaders: 'Auth-Token' }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//*Middlewares===============

//?Routes====================
app.use('/api', routes)
//?Routes====================

export default app;
