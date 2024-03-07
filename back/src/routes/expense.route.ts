import { Router } from "express";
import { newExpenseAdd } from "../controllers/expense.controller";

const route = Router();

route.post('/', newExpenseAdd)

export default route;