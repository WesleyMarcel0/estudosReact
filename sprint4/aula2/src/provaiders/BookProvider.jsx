import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../services";
import { AuthContext } from "./AutoProvider";

export const BookContext = createContext({});

export const BookProvider = ({ children }) =>{
    const { user } = useContext(AuthContext);v
    const[books, setBooks] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    console.log(searchParams.get('search'));

    useEffect(() =>{

       async function getBooks(){
/*          const response = await api.get('/books',{
            params:{
                name_like: searchParams.get('search') || ''
            }  
          }); */ // pra APi de verdade usar esse 

           const response = await api // esse ta aqui só porque to sem API

            console.log(response);

    /*      setBooks(response.date); pra APi de verdade usar esse */
            setBooks(response);
        }

        getBooks();
    },[searchParams.get('search')]);


    const handleRegister = async (data) =>{

        try {
            const response = await api.post('/books', {... data, userId: user.id }) // cada api tem uma regra para adicionar novas informações essa precisa só do id
           
            setBooks([...books, response.data]) // abrindo os books e colocando o novo livro que acabo de ser cadastrado            navigate('/home')
            navigate('/home');

        } catch (error) {
            console.error(error)
        }

    }



    return(
        <BookContext.Provider value={{ books, handleRegister }}>
            {children}
        </BookContext.Provider>
    )
}