

export const NewModal = ({currentSelectNew,setCurrentSelectNew}) =>{
    return(
        <div>
            <div role="dialog">
                <button onClick={() => setCurrentSelectNew(null)} >Fechar</button>
                <span>{currentSelectNew.category}</span>
                <h1>{currentSelectNew.title}</h1>
                <p>{currentSelectNew.content}</p>
            </div>
        </div>
    )
}