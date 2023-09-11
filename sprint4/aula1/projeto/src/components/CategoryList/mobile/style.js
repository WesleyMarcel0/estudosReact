import styled from "styled-components";


export const StyledMobileCategoryList = styled.div`

    position: relative;

    .MenuBar{
        background: var(--color-white);

        button{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        left: 0;
        top: 41px;
        padding: 10px;
        background: var(--color-white);
        width: 100%;
    }
`