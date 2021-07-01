import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const initialState = {
    title: '',
    price: 0,
    description: '',
    _id: '',
    frns:'',
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const [idFournisseur] = state.userAPI.idFournisseur

    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return  confirmAlert({
              title: "Vous n'êtes pas un fournisseur de repas",
              message: '',
              buttons: [
                {
                  label: 'Ok',
                  onClick: () =>null
                }
              ]
            });
            const file = e.target.files[0]
            
            if(!file) return confirmAlert({
                title: "Le fichier n'existe pas.",
                message: '',
                buttons: [
                  {
                    label: 'OK',
                    onClick: () => {}
                  }
                ]
              });

            if(file.size > 1024 * 1024) // 1mb
                return confirmAlert({
                    title: "Le fichier est trop volumineux !",
                    message: '',
                    buttons: [
                      {
                        label: 'Ok',
                        onClick: () =>null
                      }
                    ]
                  });

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return confirmAlert({
                    title: "Le format du fichier est incorrect.",
                    message: '',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () =>null
                      }
                    ]
                  });

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            
        }
    }

    const handleDestroy = async () => {
        try {
            if(!isAdmin) return confirmAlert({
                title:"Vous n'êtes pas un fournisseur de repas!",
                message: '',
                buttons: [
                  {
                    label: 'OK',
                    onClick: () =>null
                  }
                ]
              });
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        product.frns=idFournisseur
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        confirmAlert({
            title: 'Confirmation ',
            message: '',
            buttons: [
              {
                label: 'Oui',
                onClick:async () => { try
                     {
                    if(!isAdmin) return confirmAlert({
                        title:"Vous n'êtes pas un fournisseur de repas!",
                        message: '',
                        buttons: [
                          {
                            label: 'OK',
                            onClick: () =>null
                          }
                        ]
                      });
                    if(!images) return confirmAlert({
                        title:"Ajoutez une image !",
                        message: '',
                        buttons: [
                          {
                            label: 'Ok',
                            onClick: () =>null
                          }
                        ]
                      });
        
                    if(onEdit){
                        await axios.put(`/api/plats/${product._id}`, {...product, images}, {
                            headers: {Authorization: token}
                        })
                    }else{
                        await axios.post('/api/plats', {...product, images}, {
                            headers: {Authorization: token}
                        })
                    }
                    setCallback(!callback)
                    history.push("/")
                } catch (err) {
                   
                }
                }
              },
              {
                label: 'Non',
                onClick: () => null
              }
            ]
          });
        
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
               <h1>{onEdit? "Changez les informations que vous voulez ":"Remplissez les informations suivantes"}</h1>
            <div className="row">
                   
                    <input type="text" name="frns" id="frns"hidden
                    value={idFournisseur} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="title">Titre</label><br />
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Prix</label><br />
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label><br />
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

               

                

                <button type="submit">{onEdit? "Modifier" : "Ajouter plat"}</button>
            </form>
        </div>
    )
}

export default CreateProduct
