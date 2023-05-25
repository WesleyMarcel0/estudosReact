import styled, { css } from "styled-components";



export const StyledRecipeCard = styled.li`
    background-color: var(--color-exemple);
    box-shadow: var(--box-shadow-1) ;
    padding: 20px;
    border-left: 8px solid ${({borderColor}) => borderColor};
    
    ${({cardStyle}) => {
        if(cardStyle === "favorite"){
            return css`
                border: 2px solid red;
                background: white;
            `
        } else if (cardStyle === "recent"){
            return css`
                
                background: gray;
                border-bottom: 12px solid blue;
            `
        }
    }}

    img{
        object-fit: cover ;
        width: 100% ;
        height:200px;
    }

    .contenBox{
        display: flex;
        align-items: flex-start; //arrumar o botão
        flex-direction:column;
        gap:15px;
        padding: 20px;
    }


`
// borderColor ta recebendo o parametro atravez dele mesmo 