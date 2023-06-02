import styled, {css} from "styled-components"

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: blue;
    color:white;

    transition: .4s;

    ${({buttonSize}) => {
        /*
        if(buttonSize === "big"){
            return css`
                padding: 0px 30px;
                height: 52px;
            `
        } else if (buttonSize === "mid"){
            return css`
                padding: 0px 25px;
                height: 46px;
            `
        } else if (buttonSize === "little"){
            return css`
                padding: 0px 20px;
                height: 40px;
            `
        }
        */

        switch(buttonSize){
            case "big":
                return css`
                padding: 0px 30px;
                height: 52px;
            `; break

            case "mid":
                return css`
                padding: 0px 25px;
                height: 46px;
            `; break


            case "little":
                return css`
                padding: 0px 20px;
                height: 40px;
            `; break

            
        }
    }}

    ${({buttonStyle}) => {
        switch(buttonStyle){
            case "big":
                return css`
                    background-color: var(--color-primary);
                    color: black;
                `; break


            case "mid":
                return css`
                    background-color: green;
                `; break


            case "little":

                return css`
                    background-color: blue;
                `;break

            case "outline-primary":

                return css`
                    background-color: transparent;
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);

                    :hover{
                        background-color: var(--color-primary);
                        color: white;
                    }
                `;break
            
        }
    }}
`

   
