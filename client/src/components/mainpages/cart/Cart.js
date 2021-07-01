import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token

    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        confirmAlert({
            title: 'Confirmation ',
            message: 'Voulez-vous vraiment supprimer ce plat de votre panier ?',
            buttons: [
              {
                label: 'Oui',
                onClick: () => { cart.forEach((item, index) => {
                    if(item._id === id){
                        cart.splice(index, 1)
                    }
                })
    
                setCart([...cart])
                addToCart(cart)
            }}
              ,
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
    }
       
    const validerCmd=async ()=>{
        confirmAlert({
            title: 'Confirmation ',
            message: 'Voulez-vous vraiment confirmer votre commande ?',
            buttons: [
              {
                label: 'Oui',
                onClick: () => tranSuccess()
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
    }

    const tranSuccess =async () => {
       

        await axios.post('/api/commande', {cart}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        confirmAlert({
            title: 'Votre commande a été confirmée.',
            message: '',
            buttons: [
              {
                label: 'Ok',
                onClick: () =>null
              }
            ]
          });
    }


    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Panier vide</h2> 

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>MAD {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Totale : MAD {total}</h3>
                <button
               onClick={()=> validerCmd()}
                >Confirmer</button>
            </div>
        </div>
    )
}

export default Cart
