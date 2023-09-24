import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Info } from "../pages/info";
import { Preview } from "../components/Preview";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      
      <Route element={ <ProtectedRoutes /> } >
        <Route path="/home" element={<Home />} >
          <Route path=":id" element={ <Preview /> } />
        </Route>
        
        <Route path="/register" element={<Register />} />
        <Route path="/info/:id" element={<Info />} />
     </Route>

    { /*  <Route path="/" element={<Navigate to={`/home`} />} /> /* encaminha para a pagina*/}
      <Route path="*" element={ <h1>Pagina Não encontrada</h1> } /> {/*se caso digite uma rota que nao existe das decima*/}
    </Routes>
  );
};
