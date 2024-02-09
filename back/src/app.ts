import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import { envs } from "./config/envs";
import rutas from './routes'

const { PORT } = envs
const app = express()
app.use(morgan('dev'))
app.use(cors({origin: "*"}))
app.use(rutas)

app.listen(PORT, () => {
    console.log(`App funcionando en puerto: ${PORT}`);
})
