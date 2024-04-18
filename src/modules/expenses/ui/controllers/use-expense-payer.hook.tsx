import { Id } from '@/shared/domain/interface/id'

export function useExpensePayer(payerId: Id) {
  console.log('🎨 ☞ file: use-expense-payer.hook.tsx:4 ☞ useExpensePayer ☞ payerId:', payerId)

  // const [payer, setPayer] = useState<Payer>({ id: '', fullName: '' })
  // const getPayer = async (payerId: Id) => {
  //   const getExpensePayerQuery = ExpenseLocator.getExpensePayer()
  //   const payer = await getExpensePayerQuery.execute(payerId)
  //   setPayer(payer)
  // }
  // useEffect(() => {
  //   getPayer(payerId)
  // }, [payerId])
  // return { payer }
}
