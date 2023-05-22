import { CardList } from "./CardList"

 
  export const RecipeteList = () =>{

    return(

        <>
        <h1>Lista de receitas:</h1>

        <StyleRecipeList>

          <CardList recipe={{name: "Hamburgue", description: "Pão e hamburgue", category: "favorite" }} />
          <CardList recipe={{name: "Miojo", description: "Pronto em 3 minutos", category: "recent"}} />
        
        </StyleRecipeList>
        </>
      

        
    )
 }