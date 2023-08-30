import { forwardRef } from "react"
import { Container } from "./styles";

 const Input = ({id,label, ... rest}, ref) => {
    //recebe a ref como segundo item sem gerar erro
    return(
        <Container>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {... rest} />
    
        </Container>
    );
};

export const InputRef = forwardRef(Input)