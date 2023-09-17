import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [ user , setUser ] = useState(null);
    const navigate = useNavigate();

    const signIn = async (data) =>{ // sempre usar o metodo post pois ele é o mais seguro para fazer a vereficação de informaçoes sensiveis como senha e login, nunca get! ou outra forma, qualquer outra esta errada
       const response = await api.post('/login', data)
       const { user:userResponse, accessToken } = response.date; // os dois pontos : desta maneira ta renomiando uma desistruturação para nao causar conflito por ter dois user

       localStorage.setItem('@ts-book:token', accessToken); // o local store cria no "" e armazena 

       setUser(userResponse);
       navigate('/home');
    }

    return(
        <AuthContext.Provider value={{ signIn, user }} >
            {children}
        </AuthContext.Provider>
    )
}