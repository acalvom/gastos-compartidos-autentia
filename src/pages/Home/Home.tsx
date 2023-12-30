import { Link } from 'react-router-dom'
import Layout from '@/layout/Layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense } from '@/models/Expense'
import money from '@/assets/money.png'
import ticket from '@/assets/ticket.png'
import './Home.css'

export const Home = () => {
  const [storedExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  console.log('🚀 ~ Home ~ storedExpenses:', storedExpenses)

  // TODO: rename card-date to card-footer
  return (
    <Layout>
      <div className="home-button">
        <Link to="/create">
          <button className="button">➕ Añadir Amigo / Gasto</button>
        </Link>
      </div>
      <div className="home-wrapper">
        <div className="card-container">
          <div className="card-field card-title">
            <img src={ticket} alt="Person" width="36" height="36" />
            Cena
          </div>
          <div className="card-body">
            <div className="card-field card-subtitle">John Doe</div>
            <div className="card-field">
              €27.5
              <img src={money} alt="Person" width="32" height="32" />
            </div>
          </div>
          <div className="card-field card-date">23/12/2024 a las 16:00</div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-field card-title">
              <img src={ticket} alt="Person" width="36" height="36" />
              Cena
            </div>
            <div className="card-body">
              <div className="card-field card-subtitle">
                {/* <img src={user} alt="Person" width="24" height="24" /> */}
                John Doe
              </div>
              <div className="card-field">
                €27.5
                <img src={money} alt="Person" width="32" height="32" />
              </div>
            </div>
          </div>
          <div className="card-field card-date">
            {/* <img src={calendar} alt="Person" width="16" height="16" /> */}
            23/12/2024 a las 16:00
          </div>
        </div>
      </div>

      {/* <ul>
        {storedExpenses.map((expese) => (
          <li key={expese.id}>{expese.description}</li>
        ))}
      </ul> */}
    </Layout>
  )
}
