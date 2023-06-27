import style from './style.module.css';

export function CardProduct({product,removeProductfromProductList,editProductFromProductList}){ // não queça da {}
    return(
        <li className={style.cardProduct}> {/*desta forma pode dar o mesmo nome que nao vai dar problema e
        e o css vira geral para todos e o mudule para só um componente*/}
            <h3>{product.productName}</h3> 
            <input type="number" value={product.productWeight} onChange={(e) => editProductFromProductList(product.id,e.target.value)}/>
            <button onClick={() => removeProductfromProductList(product.id)}>Remover</button>
        </li>
    )
}