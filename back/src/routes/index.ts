import userRoute from './user.route'
import authRoute from './auth.route'
import { Router } from 'express'

const route = Router()

route.use('/users', userRoute)
route.use('/auth', authRoute)

export default route