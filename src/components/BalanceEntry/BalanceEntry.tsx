import { BalanceSummary } from '@/constants'
import { UserBalance } from '@/modules/user-balances/domain/user-balance'
import './BalanceEntry.css'

interface BalanceProps {
  balance: UserBalance
}

// TODO: balance.debtAmount.toFixed(2)}€ !!

export const BalanceEntry = ({ balance }: BalanceProps) => {
  return (
    <div className="balance-wrapper">
      <span className="span-name">{balance.user.fullName}</span>
      {/* <span className="span-flat">{BalanceSummary.paid}</span>
      <span className="span-name">{balance}€</span> */}
      <span className="span-flat">{BalanceSummary.debt}</span>
      <span
        className={`span-name span-balance-${balance.debtAmount > 0 ? 'positive' : 'negative'}`}
      >
        {balance.debtAmount.toFixed(2)}€
      </span>
    </div>
  )
}
