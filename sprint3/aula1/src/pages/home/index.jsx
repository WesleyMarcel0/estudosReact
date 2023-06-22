import { useEffect } from "react"
import { api } from "../../services";
import { useState } from "react";
import { Link } from 'react-router-dom';


export const Home = () =>{
    const[books, setBooks] = useState([]);

    useEffect(() =>{

       async function getBooks(){
            const response = await api.get('/books');

            console.log(response);
            setBooks(response.date);
        }

        getBooks();
    },[]);

    return(
        <main>
            <section>
                <h1>Teste</h1>

                <ul>
                    {books.map((book) => (
                    <li key={book.id}>

                        <Link to={`/info/${book.id}`}> {book.name} </Link> {/*usar o Link do react-router-dom que ele não recarrega a pagina apenas muda o que precisa se rmudado*/}
                       
                    </li> ))}
                </ul>
            </section>
        </main>
    )
}