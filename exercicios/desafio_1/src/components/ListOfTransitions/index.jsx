import { CardTransition } from "./CardTransition"


export const ListOfTransition = ({listTransition,productRemoveList}) =>{
    return(
        <>
        <h1>Resumo Financeiro</h1>
        <ul>
            {listTransition.map(lista => 
                <li key={lista.id}>
                    <CardTransition lista={lista} productRemoveList={productRemoveList} />
                </li>
                )}
            
         
        </ul>
        </>
    )
}