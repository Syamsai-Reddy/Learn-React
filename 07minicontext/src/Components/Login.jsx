/* eslint-disable no-unused-vars */
import React, { useState , useContext} from 'react'
 import UserContext from '../Context/UserContext'

function Login() {
    const [username , setUsername] = useState('')
    const [passwoard , setPasswoard] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username , passwoard})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'/>
        <input type='text'
        value={passwoard}
        onChange={(e) => setPasswoard(e.target.value) }
        placeholder='passwoard'/>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
