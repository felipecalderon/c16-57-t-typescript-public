import { Request, Response } from "express";
import { addNewExpense } from "../services/expense.service";
import { listExpenses } from "../services/expense.service";
import { getEventDB } from "../services/event.service";


export const newExpenseAdd = async (req: Request, res: Response) => {
    try {
      const expense = await addNewExpense(req.body);
      if (!expense || expense.errors)
        res.status(404).json({ error: "Gasto no creado", code: expense.errors });
      else res.status(200).json(expense);
      return expense;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Hubo un error al crear el gasto" });
    }
  };

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await listExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al listar gastos" });
  }
};

export const getExpensesById = async (req: Request, res: Response) => {
  try {
    const {eventId} = req.params;
    const expenses = await getEventDB(eventId);
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al listar gastos" });
  }
}

