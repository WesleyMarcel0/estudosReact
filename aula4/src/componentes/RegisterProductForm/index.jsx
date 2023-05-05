import { forwardRef, useState } from "react"

export const RegisterProductForm = ({categories, addProductToList}) => {

    const [formData, setformData] = useState({
        productName: "",
        productWeight: "",
        productCategory: "",
    })


    const submit = (event) => {
        event.preventDefault(); 
        addProductToList(formData);
    }

    const isEmpty = formData.productName === '' || formData.productWeight === '' || formData.productCategory === ''



    return(
        <form onSubmit={submit}> 

            <input type="text" value={formData.productName} onChange={(event) => setformData({...formData, productName: event.target.value })}/>
            <input type="number" value={formData.productWeight} onChange={(event) => setformData({...formData, productWeight: event.target.value }) }/>

            <select value={formData.productCategory} onChange={(event) => setformData({...formData, productCategory:event.target.value })}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                    ))}
            </select>
            <button type="submit" disabled={isEmpty ? true : false}>Cadastrar</button>
            {/*com a funcão isEmpty ele ve se é true e retorna liberand o botao de cadastrar ou nao*/}
        </form>
    )
}

