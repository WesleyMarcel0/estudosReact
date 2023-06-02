import { useState, useEffect } from "react"

export const Exemplo = () =>{

    const [count, setcount] = useState(0);
// exemplo de OnMount - nesse caso o array[] permanece vazia para receber os parametros ja atualizados
    useEffect(() => {
        console.log("montage aconteceu")
    }, [] )





// exemplo de OnUpdate - pode ler e guardar mais de um objeto

useEffect(() =>{
    console.log("a atualização aconteceu")
},[count])

// exemplo de Ondismount

    useEffect(() =>{
        return () =>{
            console.log("desmontage aconteceu")
        }
    },[])


    return(
        <div>
            componente de exemplo
            <h1>{count}</h1>
            <button onClick={()=> setcount(count +1)} > Incrementar</button>
        </div>
    )
}