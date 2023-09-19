import { useContext, useEffect } from "react"
import { api } from "../../services";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../provaiders/AutoProvider";


export const Home = () =>{

    const[books, setBooks] = useState([]);
    const { user,loading } = useContext(AuthContext);
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

    if(loading){
        return <div>Carregando</div>
    }

    if(!user){
        return <Navigate to='/' />
    }

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