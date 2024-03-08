import { Router } from "express";
import { newExpenseAdd } from "../controllers/expense.controller";
import { getExpenses } from "../controllers/expense.controller";
import {getExpensesById} from "../controllers/expense.controller";

const route = Router();

route.post('/', newExpenseAdd)
route.get('/', getExpenses)
route.get('/:eventId', getExpensesById)

export default route;