import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// abre ( ) quando é componente 
// depois de feito é só importar com o nome que vc deu a const
export const StyledToastContainer = styled(ToastContainer)`
    .Toastify_toast-body{
        div:last-child{
            font-weight: 900;
        }
    }
`