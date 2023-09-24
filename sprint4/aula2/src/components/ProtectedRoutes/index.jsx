import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../provaiders/AutoProvider"
import { BookProvider } from "../../provaiders/BookProvider";

export const ProtectedRoutes = () =>{
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>Carregando</div>
    }

    if(!user){
        return <Navigate to='/' />
    }

    return(
    <BookProvider> 
     <Outlet /> 
    </BookProvider>
    );
   
}