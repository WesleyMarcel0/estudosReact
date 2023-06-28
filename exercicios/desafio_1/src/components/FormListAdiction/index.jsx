import { useState } from "react"


export const FormListAdiction = ({listTransition,setListTransition,addProductList}) =>{

    const [formData, setFormeData] = useState({
        description:"",
        type:"",
        value:"",

    });

    const submit = (event) =>{
        event.preventDefault(); 
        addProductList(formData);

    }

    return(
        <>
        <form onSubmit={submit} >

            <h4>Descrição:</h4>
            <input type="text" value={formData.description} onChange={(event) => setFormeData({...formData, description:event.target.value})} />

            <h4>Valor(R$):</h4>
            <input type="number" value={formData.value} onChange={(event) => setFormeData({...formData,value:event.target.value})} />

            <h4>Tipo de Valor:</h4>
            <select value={formData.type} onChange={(event) => setFormeData({...formData,type:event.target.value})} >
                <option value="">Cadastrar Item</option>
                <option value="Entrada">Entrada</option>
                <option value="Despensa">Despesa</option>
            </select>

            <button type="submit">inserir valor</button>
        </form>

        </>
    )
}