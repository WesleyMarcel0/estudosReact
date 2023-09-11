import {createGlobalStyle} from 'styled-components';



export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    ul,ol{
        list-style: none;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        
    }

    input{
        background: transparent;
        border: 0;
        :focus{
            outline: none;
        }
    }

`