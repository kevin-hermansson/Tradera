import { useState } from "react";
import {loginUser} from "../services/UserService"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        const user = await loginUser(email, password)

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
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>  
    )
}
export default LoginPage