import userRoute from './user.route'
import { Router } from 'express'

const route = Router()

route.use('/users', userRoute)

export default route