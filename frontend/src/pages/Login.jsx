import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const navigate = useNavigate();
    const handleSubmit = () => {
        const payload = {
            email,
            password,
        }

        fetch("http://localhost:8080/user/login",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            navigate("/capsule")
            if(res.token){
               
                localStorage.setItem("token", res.token)
            }
        })
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Login here</h1>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="text" placeholder="pwd" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  
}
