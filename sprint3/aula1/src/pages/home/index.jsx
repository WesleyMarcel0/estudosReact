import { useEffect } from "react"
import { api } from "../../services";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";


export const Home = () =>{

    const[books, setBooks] = useState([]);
    const [searchParams] = useSearchParams();

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

    return(
        <main>
            <section>
                <Header />

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