import { useState } from 'react'
import { NoteCreatForm } from './components/NoteCreatForm'
import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { NoteNumbers } from './components/NoteNumbers'
import {v4 as uuidv4} from 'uuid';

function App() {
  
  const [notaLista, setnotaLista] = useState([]); //estado de lista [] assim pra poder interagir mesmo vazio se deixar () da problema
  console.log(notaLista);

  const addNoteList = (formData) => {
    const newNote = {...formData, id: uuidv4() };
    const newNoteList = [...notaLista, newNote];
    setnotaLista(newNoteList);
  }


  return (

    <>
     <Header />

     <main>

      <div>
        <NoteCreatForm addNoteList={addNoteList} />
      </div>

      <div>
        <h1>Lista de Notas</h1>
        <NoteNumbers />
        <NoteList />
      </div>

     </main>

    </>
  )
}

export default App
