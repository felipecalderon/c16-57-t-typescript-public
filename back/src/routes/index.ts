import userRoute from './user.route'
import authRoute from './auth.route'
import eventsRoute from './events.route'
import expensesRoute from './expense.route'
import { Router } from 'express'

const route = Router()

route.use('/users', userRoute)
route.use('/auth', authRoute)
route.use('/events', eventsRoute)
route.use('/expense', expensesRoute)

export default route