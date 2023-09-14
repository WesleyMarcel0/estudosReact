import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services";

export const Preview = () =>{
    
        const {id} = useParams(); // vai receber o id la do info

        const[book, setBook] = useState(null);
        const[loading, setLoading] = useState(true);
    
        useEffect(() =>{
    
            async function getBook(){
                try {
                
                /*const response = await api.get(`/books/${id}`);   */
                    const response = await api;
    
                    console.log(response.date);
                /*setBook(response.date); */
                    setBook(response);  
    
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
    
    
            }
    
            getBook();
        },[id]); // vai ser chamado na montagem e quando o id for alterado
    
        if(loading){
            return <p>Carregado...</p>
        }
    
        if(!book){
            return <p>Livro não encontrado...</p>
        }
    
        return(
        <main>
            <section>
                <h1>Informação</h1>
    
               <img src={book.cover} alt={book.name} />

               <Link to={`/info/${book.id}`} >Mais info..</Link>
            </section>
        </main>
        )

};