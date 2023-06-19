import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'

const LoginForm = ({username, setUsername}) => {

  const user = useContext(LoginContext)

  const loginBtn = e => {
    e.preventDefault()
    user.setUsername('Jim')
  }

  return (
    <>
    Name: {user.username}<br />
    <button onClick={loginBtn}>Login</button>
    </>
  )

}

export default LoginForm