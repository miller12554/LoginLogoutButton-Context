//https://www.taniarascia.com/using-context-api-in-react/

import React, { useState } from 'react'

import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'

import { LoginContext } from '../contexts/LoginContext'

const App = () => {

  const [username, setUsername] = useState('')

  const user = { username, setUsername }

  return (
    <LoginContext.Provider value={user}>
      { username ? 
      <LogoutForm /> : 
      <LoginForm />
      }
    </LoginContext.Provider>

  )
}

export default App