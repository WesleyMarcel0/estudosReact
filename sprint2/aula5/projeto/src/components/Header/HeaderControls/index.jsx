import { useState } from "react"
import { StyledHeardControls } from "./style";
import { MdSearch, MdFavoriteBorder } from "react-icons/md";


export const HeaderControls = ({favoritesList,setIsFavorityModalVisible,setSearch}) =>{


    const[searchInput, setSearchInput] = useState('');

    const submit = (event) =>{
        event.preventDefault(); // pra previnir aquele problema no html
        setSearch(searchInput);
        setSearchInput('');

    }

    return(
        <StyledHeardControls>
            <div>
                <form onSubmit={submit}>
                    <input type="search" value={searchInput} placeholder="Buscar" onChange={(e) =>setSearchInput(e.target.value)} />
                    <button type="submit" > <MdSearch size={26} /></button>
                </form>
            </div>

            <div>
                <button className="favoriteButton" onClick={()=>setIsFavorityModalVisible(true)} > <MdFavoriteBorder size={28} /> ({favoritesList.length}) </button>
            </div>
        </StyledHeardControls>
    )
}