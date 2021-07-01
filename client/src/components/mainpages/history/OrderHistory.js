import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [isClient] = state.userAPI.isClient
    const [isLivreur] = state.userAPI.isLivreur
    const [idFournisseur] = state.userAPI.idFournisseur
    const [idLivreur] = state.userAPI.idLivreur
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin||isLivreur){
                    const res = await axios.get('/api/commande', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])
    

    return (
        <div className="history-page">
            <h2>Vos commandes</h2>

            {isClient?<h4>Vous avez {history.length} commandes</h4>:''}

            <table>
                <thead>
                    <tr>
                        <th>Commande ID</th>
                        <th>La date de la commande</th>
                        <th>Statut</th>
                        {isLivreur && <th>Adresse de livraison</th>}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {isAdmin&&
                        history.map(items => {
                            for(var i in items.cart){
                                var x
                            if(items.cart[i].frns===idFournisseur){
                                x++
                                return(
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td>{items.status}</td>
                                <td><Link to={`/history/${items._id}`}> Détails</Link></td>
                            
                            
                            
                                
                            </tr>
                        )
                        }
                        if(x===1){
                            break
                            }}
                    
                })
                    }
                     {isClient&&
                        history.map(items => {
                            return(
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td>{items.status}</td>
                                <td><Link to={`/history/${items._id}`}>Détails</Link></td>
                            
                            
                            
                                
                            </tr>
                         ) })
                    }
                     {isLivreur&&
                        history.map(items => {
                            if(items.idLivreur==idLivreur){
                                return(
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td>{items.status}</td>
                                <td>{items.adrssseLivr}</td>
                                <td><Link to={`/history/${items._id}`}> Détails</Link></td>
                            
                            
                            
                                
                            </tr>)
                        }})
                    }

                </tbody>
            </table>
           
        </div>
    )
}

export default OrderHistory
