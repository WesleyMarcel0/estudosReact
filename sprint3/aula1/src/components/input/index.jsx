import { forwardRef } from "react"
import { Container } from "./styles";

 const Input = ({id,label,error, ... rest}, ref) => {
    //recebe a ref como segundo item sem gerar erro
    return(
        <Container>

            {label ? <label htmlFor={id}>{label}</label> : null}

            <input id={id} ref={ref} {... rest} />
            
            {error ? <p>{error}</p> : null }

        </Container>
    );
};

export const InputRef = forwardRef(Input)