import { forwardRef, useState } from "react"

export const RegisterProductForm = ({categories}) => {

    const [formData, setformData] = useState({
        productName: "",
        productWeight: "",
        productCategory: "",
    })


    const submit = (event) => {
        event.preventDefault(); //soluciona um problema de funcionamento do HTML ou melhor preve
        console.log( formData)
    }
    return(
        <form onSubmit={submit}> 
            {/* cada vez que algo mudar o evento pega ele mesmo com o target e mostra o value*/}
            {/* productName debugar*/}

            <input type="text" value={formData.productName} onChange={(event) => setformData({...formData, productName: event.target.value })}/>
            <input type="number" value={formData.productWeight} onChange={(event) => setformData({...formData, productWeight: event.target.value }) }/>

            <select value={formData.productCategory} onChange={(event) => setformData({...formData, productCategory:event.target.value })}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                    ))}
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

/* um jeito de fazer porem se tiver muitos valores ele fica muito trabalhoso
export const RegisterProductForm = ({categories}) => {
    const [productName, setproductName] = useState('Frutas')
    const [productWeight, setproducWeight] = useState('')
    const [productCategory, setproductCategory] = useState('Frutas')

    const submit = (event) => {
        event.preventDefault(); //soluciona um problema de funcionamento do HTML ou melhor preve
        console.log(productCategory,productName,productWeight)
        setproductName('')
        setproducWeight('')
        setproductCategory('')
    }
    return(
        <form onSubmit={submit}> 
            {// cada vez que algo mudar o evento pega ele mesmo com o target e mostra o value
            {// productName debugar

            <input type="text" value={productName} onChange={(event) => setproductName(event.target.value)}/>
            <input type="number" value={productWeight} onChange={(event) => setproducWeight(event.target.value) }/>

            <select value={productCategory} onChange={(event) => setproductCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.slug} value={category.slug}>{category.label}</option>
                    ))}
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    )
*/