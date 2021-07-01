import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
           
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Se connecter</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} className="info" />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} className="info"/>

                <div className="row">
                    <button type="submit">Se connecter</button>
                    <Link to="/register">Créer un compte</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
