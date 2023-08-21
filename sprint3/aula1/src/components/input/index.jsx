import { forwardRef } from "react"

 const Input = ({id,label, ... rest}, ref) => {
    //recebe a ref como segundo item sem gerar erro
    return(
        <div>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {... rest} />
    
        </div>
    );
};

export const InputRef = forwardRef(Input)