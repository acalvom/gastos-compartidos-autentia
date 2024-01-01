import { Balance } from '@/models'
import { BalanceSummary } from '@/constants'
import './BalanceEntry.css'

export const BalanceEntry = ({ balance }: { balance: Balance }) => {
  const { payer, paid, accDebt } = balance

  return (
    <div className="balance-wrapper">
      <span className="span-name">
        {payer.firstName} {payer.lastName}
      </span>
      <span className="span-flat">{BalanceSummary.paid}</span>
      <span className="span-name">{paid}€</span>
      <span className="span-flat">{BalanceSummary.debt}</span>
      <span className={`span-name span-balance-${accDebt > 0 ? 'positive' : 'negative'}`}>
        {accDebt.toFixed(2)}€
      </span>
    </div>
  )
}
