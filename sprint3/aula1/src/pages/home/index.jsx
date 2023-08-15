import { useEffect } from "react"
import { api } from "../../services";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Outlet } from "react-router-dom";


export const Home = () =>{

    const[books, setBooks] = useState([]);

    useEffect(() =>{

       async function getBooks(){
     /*     const response = await api.get('/books'); pra APi de verdade usar esse */
            const response = await api // esse ta aqui só porque to sem API

            console.log(response);

    /*      setBooks(response.date); pra APi de verdade usar esse */
            setBooks(response);
        }

        getBooks();
    },[]);

    return(
        <main>
            <section>
                <h1>Teste</h1>

                <Outlet />

                <ul> {/*pra cada book ele vai criar uma li nesse caso*/}
                    {books.map((book) => (

                        <Card key={book.id} book={book} />
                    ))}
                </ul>
            </section>
        </main>
    )
}