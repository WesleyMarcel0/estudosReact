

export const CardTransition = ({lista,productRemoveList}) =>{
    return(
        <>
            <ul>
                <h1>{lista.description}</h1>
                <p>{lista.value}</p>
                <p>{lista.type}</p>
                <button onClick={()=>productRemoveList(lista.id)} >Excluir</button>
            </ul>
        </>
    )
}