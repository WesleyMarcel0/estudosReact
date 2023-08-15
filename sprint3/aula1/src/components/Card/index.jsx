import { Link } from "react-router-dom"
import { Container } from "./styles"

export const Card = ({book}) =>{
    return(
        <Container>

             <Link to={`${book.id}`}> 
                <img src={book.cover} alt={book.name} />
                <span>{book.name}</span>
                <span>{book.author}</span>
                
             </Link> {/*usar o Link do react-router-dom que ele não recarrega a pagina apenas muda o que precisa se rmudado*/}
            
        </Container>
    )
}