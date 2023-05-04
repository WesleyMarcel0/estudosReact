export function CardProduct({productName, productWeight}){ // não queça da {}
    return(
        <li>
            <h3>{productName}</h3> {/* as {} são para juntar a parte JS com o HTML*/}
            <p>{productWeight} kg</p>
        </li>
    )
}