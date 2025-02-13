import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const upCounter = ()=>{
    setCounter(counter+1)
    console.log('clicked on up')
  }
  const downCounter = ()=>{
    setCounter(counter-1)
    console.log('clicked on down')
  }
  return (
    <>
      <h1>Understanding Hooks</h1>
      <h2>Counter : {counter}</h2>
      <button className="up" onClick={upCounter}>Up Counter</button>
      <button className="down" onClick={downCounter}>Down Counter</button>
      <div>counter : {counter}</div>
    </>
  )
}

export default App
