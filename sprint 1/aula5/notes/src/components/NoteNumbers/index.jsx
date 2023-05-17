export const NoteNumbers = ({NotesNumbers,NotesLenght}) =>{
    return(
        <div>
            <span> Notas: <strong>{NotesNumbers}</strong>   </span>
            <span> Caracteres: <strong>{NotesLenght}</strong> </span>
        </div>
    );
};