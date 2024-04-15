export function expensesFromLocalStorage(expensesString: string | null) {
  return expensesString ? JSON.parse(expensesString) : []
}
