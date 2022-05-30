import React, {useState, useEffect, useContext} from "react";
import '../components/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext"

const Login=()=>{
    let navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        phone: '',
        password: '',
    })

    const [alert, setAlert] = useState(null)
    const { phone, password } = loginForm
    const onChangeLoginForm = event => setLoginForm({
        ...loginForm,
        [event.target.name]: event.target.value
    })

    const { loginUser } = useContext(AuthContext)
    const loginEvent = async (e) => {
        e.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            // console.log(loginData);
            if (loginData.success) {
                navigate('/dashboard')
            }
            else{
                setAlert({type:'danger', message: loginData.message})
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return(
        <div className="container">
            <form onSubmit={loginEvent} class="box" >
                <h1>Login</h1>
                <div class="title">phone</div>
                <input 
                    type="text" 
                    class="textbox" 
                    id="phone" 
                    name="phone"
                    placeholder="Input your phone.."
                    value={phone}
                    onChange={onChangeLoginForm}
                    />
                <div class="title">Password</div>
                <input 
                    type="password" 
                    class="textbox"
                    id="password" 
                    name="password"
                    placeholder="Input your Password.."
                    value={password}
                    onChange={onChangeLoginForm}
                />
                <div class="rememberPass">
                    <span class="text">Remember me</span>
                    <input type="checkbox"/>
                </div>
                <input type="submit" class="login" id="btnLogin" value="Login"/>
            </form>
        </div>
    )
}
export default Login