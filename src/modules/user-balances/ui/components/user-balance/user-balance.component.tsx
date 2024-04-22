import { UserBalance } from '@/modules/user-balances/domain/user-balance'
import './user-balance.styles.css'

interface BalanceProps {
  userBalance: UserBalance
}

const BalanceSummary = {
  debt: 'debe',
  receive: 'recibe',
}

export const UserBalanceSummary = ({ userBalance }: BalanceProps) => {
  const isReimbursed = userBalance.isReimbursed()

  return (
    <div className="balance-wrapper">
      <span className="span-name">{userBalance.user.fullName}</span>
      <span className="span-flat">
        {isReimbursed ? BalanceSummary.receive : BalanceSummary.debt}
      </span>
      <span className={`span-name span-balance-${isReimbursed ? 'positive' : 'negative'}`}>
        {userBalance.getDebtFormatted()}
      </span>
    </div>
  )
}
