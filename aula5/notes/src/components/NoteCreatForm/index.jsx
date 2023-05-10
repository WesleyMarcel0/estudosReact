import { useState } from "react"

export const NoteCreatForm = ({ addNoteList }) =>{

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const submit = (event) =>{

        event.preventDefault();

        const formData = {title, message};
        addNoteList(formData);

        
    }

    return(

        <div>
            <h2>Cadastre a sua Nota</h2>
            <form onSubmit={submit}>

                {/*o onchange dispara a qualquer modificação no input*/}
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                <button type="submit">Criar nota</button>
            </form>
        </div>
    );
};