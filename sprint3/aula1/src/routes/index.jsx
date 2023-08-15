import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Info } from "../pages/info";
import { Preview } from "../components/Preview";

export const RoutesMain = () => {
  return (
    <Routes>

      <Route path="/home" element={<Home />} >
        <Route path=":id" element={ <Preview /> } />
      

      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/info/:id" element={<Info />} />
      {/* aps o :nome é criado que recebe o valor que for colocado apos info/ */}

      <Route path="/" element={<Navigate to={`/home`} />} /> {/* encaminha para a pagina*/}
      <Route path="*" element={ <h1>Pagina Não encontrada</h1> } /> {/*se caso digite uma rota que nao existe das decima*/}
    </Routes>
  );
};
