import { useUserBalanceList } from '../../controllers/use-user-balance-list.hook'
import { UserBalanceSummary } from '../user-balance/user-balance.component'
import './user-balance-list.styles.css'

export const UserBalanceList = () => {
  const { userBalances } = useUserBalanceList()

  return (
    <div>
      <h2 className="home-title">📈 Balance del grupo</h2>
      <div className="home-balance" data-testid="balance">
        {userBalances.map((userBalance) => (
          <UserBalanceSummary key={userBalance.user.id} userBalance={userBalance} />
        ))}
      </div>
    </div>
  )
}
