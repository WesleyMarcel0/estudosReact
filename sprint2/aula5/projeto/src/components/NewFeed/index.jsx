import { NewCard } from "./NewCard"


export const NewFeed = ({newsList}) =>{
    return(
        <div>
            <h2>Recentes</h2>
            <ul>
                {
                    newsList.map(currentNew =>(
                       <NewCard key={currentNew.id} currentNew={currentNew} />  
                    ))
                }
       
            </ul>
        </div>
    )
}