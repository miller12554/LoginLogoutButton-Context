import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'

const LogoutForm = ({username, setUsername}) => {

  const user = useContext(LoginContext)

  const logoutBtn = e => {
    e.preventDefault()
    user.setUsername('')
  }

  return (
    <>
    Name: {user.username}<br />
    <button onClick={logoutBtn}>Logout</button>
    </>
  )

}

export default LogoutForm