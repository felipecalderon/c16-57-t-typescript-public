import { IExpense } from "../config/interfaces/expense.interface";
import Event from "../data/mongo/models/event.model";
import Expense from "../data/mongo/models/expense.model";

export const getExpense = async (id: string) => {
  try {
    // Buscar gasto si existe id
    const expense = await Expense.findById(id)
      .populate("userId")
      .populate("eventId");
    if (!expense) return null;
    return expense;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const listExpenses = async () => {
  try {
    const expenses = await Expense.find()
      .populate("userId")
      .populate("eventId");
    return expenses;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addNewExpense = async ({
  description,
  userId,
  amount,
  eventId,
}: IExpense) => {
  try {
    const newExpense = await Expense.create({
      description,
      userId,
      amount,
      eventId,
    });
    await Event.findByIdAndUpdate(
      eventId,
      {
        $push: { expenses: newExpense._id }, // ID del nuevo gasto al array de expenses.
      },
      { new: true, safe: true, upsert: false } // Opciones para retornar el documento modificado y asegurar la operación.
    );
    return newExpense;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
