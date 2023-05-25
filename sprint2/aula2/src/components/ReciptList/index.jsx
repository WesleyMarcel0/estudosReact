import { CardList } from "./CardList"
import { StyleRecipeList } from "./style"

 
  export const RecipeteList = ({recipList}) =>{

    return(

        <>
        <h1>Lista de receitas:</h1>

        <StyleRecipeList>

          
          {recipList.map(recipe =>(

            <CardList 
              key={recipe.id}
              recipe={recipe} 
            />

          ))} {/*ta mandando a lista e escrevendo na tela*/}
        
        </StyleRecipeList>
        </>
      

        
    )
 }