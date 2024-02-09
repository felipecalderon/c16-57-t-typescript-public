import {Request, Response, Router} from 'express' 
import { demo } from '../controllers/demo.controller'

const app = Router()

app.get('/', async (req: Request, res: Response) => {
    try {
        const data = demo()
        res.json(data)
    } catch (error) {
        res.status(500).json({error: 'Not Found'})
    }
})

export default app

