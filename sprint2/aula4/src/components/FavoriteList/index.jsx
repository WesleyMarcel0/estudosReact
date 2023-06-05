import { useEffect } from "react"
import { StyledButton } from "../../style/button"
import { StyledFavoriteModal } from "./style"
import { useRef } from "react"
import { useOutclick } from "../../hooks/useOutClick"

export const FavoriteList = ({
    favoriteList,
    removeRecipeFromFavoriteList,
    setOpen}) => {
        /* criamos um useoutclick que é um conceito bem avançado para criar os uses

        const modalRef = useRef(); é um querySelequetor para react


        //montagem
        
       
       const handclick = (event) =>{
        if(!modalRef.current.contains(event.target)){
            setOpen(false); //fecha o terminal
            console.log("clicou fora");
        } else {
            console.log("clicou dentro");
        }
       }
        // quando quiser add um evento em um local que não podemos tocar com react ex"o HEADER fora do APP"
        window.addEventListener('mousedown', handclick);

        // EFEITO DE DESMOTAGEM- caso não adicionado o evento de criagem cria e armazena varias vezes
        // return() =>{} significa a função que executa na desmontagem
        useEffect(() => {
            return () => {
                window.removeEventListener('mousedown', handclick); //usar o click abre e fecha rapidao
            }
        },[])
        */

        const modaRef = useOutclick( ()=>{ // recebe o callback com o que eu quero fazer aqui
            setOpen(false);

        })
    return(
        <StyledFavoriteModal role='dialog' ref={modalRef} >
            <button onClick={()=> setOpen(false)} >fechar</button>
            <ul> {/*pra cada favorito*/}
                {favoriteList.map(favorite => (
                    <li key={favorite.id}>
                        <h3>{favorite.title}</h3>

                        <StyledButton 
                            buttonSize= "mid" 
                            buttonStyle="primary" 
                            onClick={() => removeRecipeFromFavoriteList(favorite.id)}> 
                                Desfavoritar </StyledButton>
                    </li>
                ))}
            </ul>  

        </StyledFavoriteModal>

    )
}