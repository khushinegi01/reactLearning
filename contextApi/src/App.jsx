import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './ContextAPI/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <h1>Learning context Api</h1>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
