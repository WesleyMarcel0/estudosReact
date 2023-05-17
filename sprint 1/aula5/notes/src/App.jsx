import { useState } from 'react'
import { NoteCreatForm } from './components/NoteCreatForm'
import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { NoteNumbers } from './components/NoteNumbers'
import {v4 as uuidv4} from 'uuid';

function App() {
  
  const [notaLista, setnotaLista] = useState([]); //estado de lista [] assim pra poder interagir mesmo vazio se deixar () da problema
  
  const NotesNumbers = notaLista.length;

  const NotesLenght = notaLista.reduce((previousValue,note) => {
      return previousValue + note.message.length;
  }, 0 ) ; // esse zero é o valor inicial que vai começar

  const addNoteList = (formData) => {
    const newNote = {...formData, id: uuidv4() };
    const newNoteList = [...notaLista, newNote];
    setnotaLista(newNoteList);
  }

  const RemoveNoteFromNotList = (noteId) =>{

    const NewNotelist = notaLista.filter(note => note.id !== noteId);
    setnotaLista(NewNotelist);
  };

  return (

    <>
     <Header />

     <main>

      <div>
        <NoteCreatForm addNoteList={addNoteList} />
      </div>

      <div>
        <h1>Lista de Notas</h1>
        <NoteNumbers NotesNumbers={NotesNumbers} NotesLenght={NotesLenght} />
        <NoteList notaLista={notaLista} RemoveNoteFromNotList={RemoveNoteFromNotList} />
      </div>

     </main>

    </>
  )
}

export default App
