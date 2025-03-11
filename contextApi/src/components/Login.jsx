import React from 'react'
import { useState ,useContext } from 'react'
import UserContext from '../ContextAPI/UserContext'
function Login() {
    const [username,setUsername] = useState('')
    const [password , setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username})
    }
    return (
        <div>
            <h1>Login</h1>
            <input 
                type='text' 
                value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
                placeholder='Enter name'/>
            <br></br>
            <input 
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Enter password'/>
            <br></br>
            <button onClick={handleSubmit} style={{color: 'white', backgroundColor:'black'}}>Login</button>
        </div>
    )
}

export default Login
