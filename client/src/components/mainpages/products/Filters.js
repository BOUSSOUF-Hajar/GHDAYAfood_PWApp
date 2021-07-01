import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
   

   
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


   

    return (
        <div className="filter_menu">
                
    

            <input type="text" value={search} placeholder="Rechercher un plat"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Trié par: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Plus récent</option>
                    <option value='sort=oldest'>Plus ancien</option>
                    <option value='sort=-sold'>Recommander</option>
                    <option value='sort=-price'>Prix élevé à bas</option>
                    <option value='sort=price'>Prix bas à élevé</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
