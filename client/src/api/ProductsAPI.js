import {useState, useEffect} from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
   
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/plats?limit=${page*9}&${sort}&title[regex]=${search}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback, sort, search, page])
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
       
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default ProductsAPI
