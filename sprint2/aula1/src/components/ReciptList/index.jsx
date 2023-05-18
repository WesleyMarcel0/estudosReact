 export const RecipeteList = ({recipe}) =>{
    return(

        <>
        <li>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
        </li>
        </>
      

        
    )
 }