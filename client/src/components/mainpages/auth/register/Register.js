import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: '',ROLE:'',adresse:''
    })
   const handleChange=(e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    
    }

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
           
        }
    }

    return (
        <div className="register-page">
            <form onSubmit={registerSubmit}>
                <h2>s'inscrire</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} className="info" />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} className="info" />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}  className="info"/>
                <input type="adresse" name="adresse" required 
                placeholder="Address" value={user.adresse} onChange={onChangeInput} className="info"/>

                 <div className="role">
                 <input type="radio" value="FOURNISSEUR" id="frns"
                        onChange={handleChange} name="role" />
                  <label for="frns" >FOURNISSEUR DE REPAS </label> 
                    
                 
                  </div>
                  <br />
                  <div className="role">
                  <input type="radio" value="CLIENT" id="clnt"
                    onChange={handleChange} name="role"/>
                  <label for="clnt" >CLIENT</label>
                    
                  
                  </div>
                  <br />
                  

                <div className="row">
                    <button type="submit">S'inscrire </button>
                    <Link to="/login">Se connecter</Link>
                </div>
            </form>
        </div>
    )
}

export default Register