import {useState, useEffect} from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [isLivreur, setIsLivreur] = useState(false)
    const [idFournisseur, setIdFournisseur] = useState('')
    const [idClient, setIdClient] = useState('')
    const [idLivreur, setIdLivreur] = useState('')
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    if( res.data.role === "FOURNISSEUR"){
                        setIsAdmin(true); setIdFournisseur(res.data._id);
                    }
                    
                    else if (res.data.role === "CLIENT"){setIsClient(true); setIdClient(res.data._id)}
                    else if (res.data.role === "LIVREUR"){setIsLivreur(true); setIdLivreur(res.data._id)}

                    setCart(res.data.cart)

                } catch (err) {
                    
                }
            }

            getUser()
            
        }
    },[token])

    

    const addCart = async (product) => {
        if(!isLogged) return  confirmAlert({
            title: "Vous devez vous inscrir !",
            message: '',
            buttons: [
              {
                label: 'Ok',
                onClick: () =>null
              }
            ]
          });
        if(isClient){
        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])
           
            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })
        }
        }else{
             confirmAlert({
                title: "Vous n'étes pas un client !",
                message: '',
                buttons: [
                  {
                    label: 'Ok',
                    onClick: () =>null
                  }
                ]
              });
        }
        return confirmAlert({
            title: "Le produit est ajouté au panier .",
            message: '',
            buttons: [
              {
                label: 'Ok',
                onClick: () =>null
              }
            ]
          });
    }
    

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isClient:[isClient, setIsClient],
        isLivreur:[isLivreur, setIsLivreur],
        idFournisseur:[idFournisseur, setIdFournisseur],
        idClient:[idClient, setIdClient],
        idLivreur:[idLivreur, setIdLivreur],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default UserAPI
 