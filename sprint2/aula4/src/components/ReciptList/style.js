import styled from "styled-components";

export const StyleRecipeList = styled.ul`

    display: grid;
    grid-template-columns: repeat(3, 1fr); // ou 1 fr 1 fr 1 fr
    gap: 30px;
    padding: 20px;

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

// se precisar importar uma font faça no HTML pq é o que menos pode dar problema