import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";


export const Info = () =>{
    const {id} = useParams(); // vai receber o id la do info

    const[book, setBook] = useState([]);

    useEffect(() =>{

       async function getBook(){
      /*    const response = await api.get(`/books/${id}`);   */
             const response = await api;

            console.log(response.date);
        /*  setBook(response.date); */
             setBook(response);
        }

        getBook();
    },[]);

    return(
    <main>
        <section>
            <h1>Informação</h1>

            <img src={book.cover} alt={book.name} />
        </section>
    </main>
    )
}