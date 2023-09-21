import { useContext, useEffect } from "react"
import { api } from "../../services";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../provaiders/AutoProvider";


export const Home = () =>{

    const { user,loading } = useContext(AuthContext);


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