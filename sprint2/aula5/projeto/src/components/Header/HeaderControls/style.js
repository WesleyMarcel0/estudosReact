import styled from "styled-components";


export const StyledHeardControls = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    form{
        display: flex;
        align-items: center;
        background-color: var(--color-red2);
        height: 40px;
        padding: 0 15px;
        transition: .4s;

        :has(input:focus){ // has = se meu formulario tiver um input focado/focus faça isso
            outline: 1.5px solid var(--color-white);
        }
            input{
                width: 100%;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 1rem;
            }

            input::placeholder{
                color: rgba(255,255,255, .5);
            }

            input,button{
            color: var(--color-white) ;
            }

    }

    .favoriteButton{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto',sans-serif;
        font-size: 1rem;

        gap: 5px;
        color: var(--color-white);
    }
`