import { useState } from 'react'
import Lottery from './Lottery'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {
  let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    return ticket.every((num)=>num===ticket[0]);
  }

  return (
    <>
      {/* <Ticket ticket={[1,2,3]}/>
      <Ticket ticket={[4,5,6,5,7,8,9]}/> */}
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
