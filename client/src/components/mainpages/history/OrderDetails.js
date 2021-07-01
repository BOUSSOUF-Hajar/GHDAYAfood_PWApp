import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useHistory} from 'react-router-dom'


function OrderDetails() {
    const state = useContext(GlobalState)
    const [token] = state.token
    const [history,setHistory] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])
    const [idFournisseur] = state.userAPI.idFournisseur
    const [isAdmin] = state.userAPI.isAdmin
    const histo = useHistory()
    
    const [isClient] = state.userAPI.isClient
    const [isLivreur] = state.userAPI.isLivreur
   
   

    const params = useParams()
    
    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
        }
    },[params.id, history])

    const TraiterCmd=async (idp,statut)=>{
       
            confirmAlert({
                title: 'Confirmation ',
                message: " Voulez-vous changer l'état la commande ?",
                buttons: [
                  {
                    label: 'Oui',
                    onClick:async () => {
                        await axios.put(`/api/commande/${idp}`,{statut},{
                            headers: {Authorization: token}
                        })
                        histo.push("/history")
                    }
                  },
                  {
                    label: 'Non',
                    onClick: () => null
                  }
                ]
              });
            
        }
        
    
        const SupprimerCmd= async (idp,statut) =>{
            if(statut==="Non traitée"){
                confirmAlert({
                     title: 'Suppression ',
                    message: 'Voulez-vous vraiment supprimer cette commande ?',
                     buttons: [
              {
                label: 'Oui',
                onClick:async () => {
                    history.forEach((item, index) => {
                
                    if(item._id === idp){
                        history.splice(index, 1)
                        setHistory([...history])
                        
                        
                    }
                    
                })
                
                await axios.delete(`/user/addHistory/${idp}`,{
                    headers: {Authorization: token}
                })
                confirmAlert({
                    title: "La commande a été supprimée",
                    message: '',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () =>null
                      }
                    ]
                  });
                  histo.push("/history")
            
            }
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          })
          
        }
        else{
             confirmAlert({
                title: "Vous ne pouvez pas supprimer cette commande",
                message: '',
                buttons: [
                  {
                    label: 'Ok',
                    onClick: () =>null
                  }
                ]
              });
        }
}
const adminTraitement=(statut)=>{
    if(statut==="Non traitée"){
        return(
            <button onClick={()=>TraiterCmd(params.id,"en cours de traitement")} className="traite">Préparer la  commande</button>
        )    }
        if(statut==="en cours de traitement"){
            return(
                <button onClick={()=>TraiterCmd(params.id,"traitée")} className="traite">Commande traitée</button>
                 
            )
        }
}


    if(orderDetails.length === 0) return null;

    return (
        <div className="history-page">
           

            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Plat</th>
                        <th>Quantité</th>
                    
                        <th>Prix</th>
                        {isLivreur && <th>Adresse du fournissueur</th>}
                    </tr>
                </thead>
                <tbody>
                {isAdmin&&
                        orderDetails.cart.map(item =>{
                            if(item.frns===idFournisseur){
                                return(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity} </td>
                            <td>MAD {item.price * item.quantity}</td>
                        </tr>)
                            }
                        })
                    }
                    
                    {isClient &&
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity} </td>
                            <td>MAD {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    {isLivreur &&
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity} </td>
                            
                            <td>MAD {item.price * item.quantity}</td>
                            <td> {item.adresse}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
           {isLivreur?  <button onClick={()=>TraiterCmd(params.id,"Livrée")} className="traite">Commande livrée</button>:<button onClick={()=>SupprimerCmd(params.id,orderDetails.status)} className="annulerCMD">Annuler la commande</button>}
          
          
           {isAdmin && adminTraitement(orderDetails.status) }
          

        </div>
    )
}

export default OrderDetails
