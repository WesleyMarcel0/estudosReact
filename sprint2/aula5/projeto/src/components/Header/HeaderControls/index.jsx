import { useState } from "react"


export const HeaderControls = ({favoritesList,setIsFavorityModalVisible,setSearch}) =>{


    const[searchInput, setSearchInput] = useState('');

    const submit = (event) =>{
        event.preventDefault(); // pra previnir aquele problema no html
        setSearch(searchInput);
        setSearchInput('');

    }

    return(
        <div>
            <div>
                <form onSubmit={submit}>
                    <input type="search" value={searchInput} onChange={(e) =>setSearchInput(e.target.value)} />
                    <button type="submit" >buscar</button>
                </form>
            </div>

            <div>
                <button onClick={()=>setIsFavorityModalVisible(true)} >Favoritos ({favoritesList.length}) </button>
            </div>
        </div>
    )
}