import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
     const navigate=useNavigate();
    const handleSubmit = () => {
        const payload = {
            name,
            email,
            password,
            
        }

        fetch("http://localhost:8080/user/signup",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            navigate("/login")
        })
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Register here</h1>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="text" placeholder="pwd" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Register</button>
    </div>
}

