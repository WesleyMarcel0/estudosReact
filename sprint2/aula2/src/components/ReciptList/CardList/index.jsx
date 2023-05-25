import { StyledRecipeCard } from "./style"
import {StyledButton} from "../../../style/button"

export const CardList = ({recipe}) =>{

    return(
        <StyledRecipeCard borderColor="green" cardStyle={recipe.category}>
                        {/*p recipe vai ser igual ao valor da categoria*/}

            <img src={recipe.image} alt={recipe.title} />
            <div className="contentBox">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>

                <StyledButton buttonStyle="little" buttonSize="little" >
                    Favorita
                </StyledButton> 
            </div>
        

        </StyledRecipeCard>
    )
}