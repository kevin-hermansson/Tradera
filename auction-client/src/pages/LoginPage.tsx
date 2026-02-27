import { useState } from "react";
import {loginUser} from "../services/UserService"
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleLogin = async () => {
        if (!email || !password) {
            setMessage("Please enter email and password")
            return
        }
        const user = await loginUser(email, password)

        if (!user) {
            setMessage("Invalid email or password")
            return
        }


        localStorage.setItem("user", JSON.stringify(user))
        console.log(user)
        navigate("/")
    }

    return (
        <div>
            <h1>Login</h1>

            <input
                placeholder="Email"
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                    setMessage("")
                }}
                
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value)
                    setMessage("")
                }}
            />
            <button disabled={!email || !password} onClick={handleLogin}>Login</button>
            {message && <p>{message}</p>}
            <BackButton />
        </div>  
    )
}
export default LoginPage