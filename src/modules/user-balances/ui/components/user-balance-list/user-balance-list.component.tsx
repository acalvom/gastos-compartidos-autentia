import { BalanceEntry } from '@/components/BalanceEntry/BalanceEntry'
import { useUserBalanceList } from '../../controllers/use-user-balance-list.hook'

const BalanceSummary = {
  title: '📈 Balance del grupo',
  paid: 'ha pagado',
  debt: 'y su balance es',
}

export const UserBalanceList = () => {
  const { userBalances } = useUserBalanceList()

  return (
    <div className="home-balance" data-testid="balance">
      <h2 className="home-title">{BalanceSummary.title}</h2>
      {userBalances.map((userBalance) => (
        <BalanceEntry key={userBalance.user.id} balance={userBalance} />
      ))}
    </div>
  )
}
