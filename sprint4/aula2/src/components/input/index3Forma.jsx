

export const Input2 = ({ id , label , children , register, ... rest}) => {
    //recebe a ref como segundo item sem gerar erro
    return(
        <div>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} {... rest} {... register} />
            {children}
        </div>
    );
};