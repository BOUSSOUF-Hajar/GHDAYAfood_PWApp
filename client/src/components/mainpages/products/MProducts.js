import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import { confirmAlert } from 'react-confirm-alert'
    import 'react-confirm-alert/src/react-confirm-alert.css'



function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [idFournisseur] = state.userAPI.idFournisseur
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    
    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        confirmAlert({
            title: 'Suppression ',
            message: ' voulez-vous vraiment supprimer ce plat ?',
            buttons: [
              {
                label: 'Oui',
                onClick:async () => { 
                    try {
                    setLoading(true)
                    const destroyImg = axios.post('/api/destroy', {public_id},{
                        headers: {Authorization: token}
                    })
                    const deleteProduct = axios.delete(`/api/plats/${id}`, {
                        headers: {Authorization: token}
                    })
        
                    await destroyImg
                    await deleteProduct
                    setCallback(!callback)
                    setLoading(false)
                } catch (err) {
                   
                };
                confirmAlert({
                  title: "Le plat a été supprimé !",
                  message: '',
                  buttons: [
                    {
                      label: 'OK',
                      onClick: () =>null
                    }
                  ]
                });}
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
         
    }
    const deleteProducts = async(id, public_id) => {
      
                  try {
                  setLoading(true)
                  const destroyImg = axios.post('/api/destroy', {public_id},{
                      headers: {Authorization: token}
                  })
                  const deleteProduct = axios.delete(`/api/plats/${id}`, {
                      headers: {Authorization: token}
                  })
      
                  await destroyImg
                  await deleteProduct
                  setCallback(!callback)
                  setLoading(false)
              } catch (err) {
                 
            
              }
       
  }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        confirmAlert({
            title: 'Suppression ',
            message: ' Voulez-vous supprimer tous les plats ?',
            buttons: [
              {
                label: 'Oui',
                onClick: () => { 
                    products.forEach(product => {
            
                        if(product.frns===idFournisseur) deleteProducts(product._id, product.images.public_id)
                    });
                    confirmAlert({
                      title: "Vos plats ont été bien supprimés ",
                      message: '',
                      buttons: [
                        {
                          label: 'OK',
                          onClick: () =>null
                        }
                      ]
                    });
                }
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
         
        
    }

    if(loading) return <div><Loading /></div>
    return (
        <>
        <Filters />
        
        {
            isAdmin && 
            <div className="delete-all">
                <span>Sélectionner tous</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Supprimer tous</button>
            </div>
        }

        <div className="products">
            {
                products.map(product => {
                    if(product.frns===idFournisseur){
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    }
                })
            } 
        </div>

        <LoadMore />
        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
