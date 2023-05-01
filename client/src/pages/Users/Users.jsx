import React from 'react'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import { useLocation } from 'react-router-dom'
import UserList from './UserList'
import './Users.css'
import ChatBot from '../../components/ChatBot/ChatBot'

const Users = () => {

    

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2" style={{marginTop:"30px"}}>
          <h1 style={{fontWeight:"400"}}>Users</h1>
          <UserList /> 
        </div>
      <ChatBot/>
    </div>
  )
}

export default Users
