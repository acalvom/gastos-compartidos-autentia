export class Money {
  static getMoneyFormatted(amount: number): string {
    return `€${amount}`
  }

  static getDebtFormatted(amount: number): string {
    return `${Math.abs(amount).toFixed(2)}€`
  }
}
