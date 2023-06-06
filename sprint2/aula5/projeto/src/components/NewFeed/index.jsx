import { NewCard } from "./NewCard"


export const NewFeed = () =>{
    return(
        <div>
            <h2>Recentes</h2>
            <ul>
                <NewCard />
                <NewCard />
                <NewCard />
                
            </ul>
        </div>
    )
}