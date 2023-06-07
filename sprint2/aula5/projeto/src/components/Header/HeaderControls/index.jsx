

export const HeaderControls = ({favoritesList,setIsFavorityModalVisible}) =>{
    return(
        <div>
            <div>
                <form action="">
                    <input type="text" />
                    <button>buscar</button>
                </form>
            </div>

            <div>
                <button onClick={()=>setIsFavorityModalVisible(true)} >Favoritos ({favoritesList.length}) </button>
            </div>
        </div>
    )
}