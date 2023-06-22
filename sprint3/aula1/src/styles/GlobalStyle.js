import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`

    :root{
        --color-primary: #360707;
        --color-secondary: #DCD6D6;
        --color-back: #100f0f;
        --color-transparent: rgba(217,217,217, 0.36);
        --color-sucesse:#7CC39C;
        --color-warning:#FBEA85;
        --color-error:#EA524F;

        font-size: 60%;
    }

    @media(min-width: 700px){
        :root{
            font-size: 62.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    body{
        background: linear-gradient(180deg, var(--color-back) 74.66%, var(--color-primary) 100% ) ;
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;

        overflow: hidden;
    }

    body,input,button,textarea{
        font-family: 'inter', sans-serif;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, p {
        color:var(--color-secondary);
        font-weight: 500;
        
    }

    h1{
        font-size: 4.3rem;
    }

    button{
        cursor: pointer;
    }

    li{
        color:var(--color-secondary);
    }
`;

// 1rem = 16px => 100%
// 1rem = 10px => 62.5% por isso dos root la me cima
// todos os rem valem 10px agora e fica mais facil de controlar os pixel deles
// agora 1.4 rem é = 14pixel

// font de 60% faz a fonte ficar responsiva conforme diiminui