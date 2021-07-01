import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Logo from './icon/logo.jpeg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [isClient] = state.userAPI.isClient
    const [isLivreur] = state.userAPI.isLivreur
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        confirmAlert({
            title: 'Confirmation ',
            message: 'Voulez-vous vraiment vous déconnecter ?',
            buttons: [
              {
                label: 'Oui',
                onClick:async () =>  {await axios.get('/user/logout')
        
                localStorage.removeItem('firstLogin')
                
                window.location.href = "/";}
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
        
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Ajouter plat</Link></li>
               
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">Mes commandes</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">

                   <Link to="/"> <img src={Logo} alt=""  /></Link>
               
            </div>

            <ul style={styleMenu}>
                {isAdmin &&
                <li><Link to="/">Mes plats</Link></li>
                }
                 {isClient &&
                <li><Link to="/">Accueil</Link></li>
                
                }
                 

               
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><div className="signupORsign"><Link to="/login">Se connecter / s'inscrire </Link></div></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isClient ? 
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>:''
            }
            
        </header>
    )
}

export default Header
