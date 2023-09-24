import { useContext } from "react"
import { Card } from "../../components/Card";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BookContext } from "../../provaiders/BookProvider";


export const Home = () =>{

    const { books } = useContext(BookContext);


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