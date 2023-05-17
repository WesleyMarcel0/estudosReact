import { NoteCard } from "./NoteCard";

export const NoteList = ({notaLista,RemoveNoteFromNotList}) => {
    return(
        <>
        {notaLista.length > 0 ? (
            <ul>

                {notaLista.map((note) => {
                    return <NoteCard key={note.id} note={note} RemoveNoteFromNotList={RemoveNoteFromNotList} />
                })}

            </ul>
        ): (
            <p>Digite uma Nota!</p>
         )}

        </>

    );
};