import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import { api } from "../services";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [ user , setUser ] = useState(null);
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const loadUser = async () =>{
            try {
                const token = localStorage.getItem("@ts-book:token");

                if (!token) {
                  return;
                }

                const { sub } = jwtDecode(token);

                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const renponse = await api.get(`users/${sub}`, {// ta confirmando se o token é valido
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });

                setUser(response.data);
                
            } catch (error) {
                console.error(error);
            } finally {
                setloading(false);
            }
        };

        loadUser();
    },[])

    const signIn = async (data) =>{ // sempre usar o metodo post pois ele é o mais seguro para fazer a vereficação de informaçoes sensiveis como senha e login, nunca get! ou outra forma, qualquer outra esta errada
       try {
        const response = await api.post('/login', data);

        const { user:userResponse, accessToken } = response.date; // os dois pontos : desta maneira ta renomiando uma desistruturação para nao causar conflito por ter dois user

        api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

        localStorage.setItem('@ts-book:token', accessToken); // o local store cria no "" e armazena 

        const toNavigate = location.state?.pathname || '/home';

        setUser(userResponse);
        navigate('/home');

       } catch (error) {

         console.log(error);
       }


    }

    return(
        <AuthContext.Provider value={{ signIn, user,loading }} >
            {children}
        </AuthContext.Provider>
    )
}