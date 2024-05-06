import { Modal } from '@/shared/ui/components/modal/modal.component'
import { useState } from 'react'
import { UserBalanceList } from '../user-balance-list/user-balance-list.component'
import './user-balance-modal.styles.css'

export const UserBalanceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="user-balance-wrapper">
      <button className="button" onClick={toggleModal}>
        Ver Balance
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="user-balance-modal">
          <h2 className="title">Balance del grupo</h2>
          <UserBalanceList />
          <button className="button" onClick={toggleModal}>
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  )
}
