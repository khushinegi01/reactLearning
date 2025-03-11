import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [Mode , setMode] = useState("light")

  const darkMode = ()=>{
    setMode('dark')
  }

  const lightMode = ()=>{
    setMode('light')
  }

  useEffect(()=>{
    document.querySelector('body').classList.remove('light','dark')
    document.querySelector('body').classList.add(Mode)
  },[Mode])


  return (
    <ThemeProvider value={{themeMode : Mode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
