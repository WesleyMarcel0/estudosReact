import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";


export const Info = () =>{
    const {id} = useParams(); // vai receber o id la do info

    const[book, setBook] = useState([]);

    useEffect(() =>{

       async function getBook(){
            const response = await api.get(`/books/${id}`);

            console.log(response.date);
            setBook(response.date);
        }

        getBook();
    },[]);

    return(
    <main>
        <section>
            <h1>Informação</h1>
        </section>
    </main>
    )
}