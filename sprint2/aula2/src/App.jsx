import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { RecipeteList } from './components/ReciptList'
import { StyledButton } from './style/button'
import { GlobalStyle } from './style/global'
import { Exemplo } from './components/exemplo'

function App() {
 
  const [isOpen, setOpen] = useState(false);
  const [recipList, setrecipList] = useState([]);
  console.log(recipList);

  const LoadRecip = async () =>{
    try { // o trycatch tenta executar o codigo linha a linha e caso de problema vai pro catch erro interrompendo a execução do try
                      //o await faz esperar algo acontecer para voltar ali
      const response = await fetch('');
      //por causa do fatch precisa converter para json
      const json = await response.json();
      setrecipList(json)




        } catch (error) {
        console.log("erro")
      }
  }


  useEffect(() =>{
    console.log("componente app montado")
    LoadRecip();
  },[])

  return (
    <>
      <GlobalStyle />

        <button onClick={ () => setOpen(!isOpen) }> modal</button>
        { isOpen ? <Exemplo/> : null }{/*isOpen é true ? se for então renderize o exemplo se nao nao faça nada*/}
    
     
      <Header />
      <RecipeteList recipList={recipList} />

      <StyledButton buttonSize= "big" buttonStyle="big" >

          alguma coisa

      </StyledButton>
      <StyledButton buttonSize= "mid" buttonStyle="mid">

          alguma coisa

      </StyledButton>

      <StyledButton buttonSize= "little" buttonStyle="little" >

         alguma coisa

      </StyledButton>

    </>
  )
}

export default App
