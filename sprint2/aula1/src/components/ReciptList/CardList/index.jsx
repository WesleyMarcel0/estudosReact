import { StyledRecipeCard } from "./style"
import {StyledButton} from "../../../style/button"

export const CardList = ({recipe}) =>{

    return(
            <StyledRecipeCard borderColor="green" cardStyle={recipe.category}>
                        {/*p recipe vai ser igual ao valor da categoria*/}
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>

            <StyledButton buttonStyle="little" buttonSize="little" >
                Favorita
            </StyledButton> 

            </StyledRecipeCard>
    )
}