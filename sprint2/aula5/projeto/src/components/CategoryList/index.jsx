

export const CategoryList = ({categoriesList}) =>{
    return(
        <ul>
            <li>
                <button>Recentes</button>
            </li>

            {
            categoriesList.map(category =>(
                <li key={category.id} >
                    <button>
                        {category.label}
                    </button>
                </li>
            ))
            }
        </ul>
    )
}