import routes from './demo.route'
import { Router } from 'express'

const app = Router()

app.use(routes)

export default app