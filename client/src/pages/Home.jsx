import { FaTicketAlt } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <section className='heading'>
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>
      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create new Ticket
      </Link>
      <Link to='/tickets' className='btn  btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  )
}
