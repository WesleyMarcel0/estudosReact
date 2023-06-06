import { FavorityList } from "./FavorityList"


export const FavorityModal = () =>{
    return(
        <div role="dialog" >
            <button>Fechar</button>
            <h2>Favoritos</h2>
            <FavorityList />
        </div>
    )
}