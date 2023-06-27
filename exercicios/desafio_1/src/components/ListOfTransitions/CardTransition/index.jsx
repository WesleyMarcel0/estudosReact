

export const CardTransition = ({lista}) =>{
    return(
        <>
            <ul>
                <h1>{lista.description}</h1>
                <p>{lista.value}</p>
                <p>{lista.type}</p>
                <button>Excluir</button>
            </ul>
        </>
    )
}