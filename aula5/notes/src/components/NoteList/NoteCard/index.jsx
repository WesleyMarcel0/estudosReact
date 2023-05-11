export const NoteCard = ({note,RemoveNoteFromNotList}) =>{
    return(

        
        <li>
            <h3>{note.title}</h3>
            <p>{note.message}</p>
            <button onClick={() => RemoveNoteFromNotList(note.id)}>Excluir</button>
            {/*sempre colocar () => para evitar o problema de loop*/}
        </li>
    );
};