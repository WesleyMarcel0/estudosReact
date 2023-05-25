import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { RecipeteList } from './components/ReciptList'
import { StyledButton } from './style/button'
import { GlobalStyle } from './style/global'
import { Exemplo } from './components/exemplo'

function App() {
 
  const [isOpen, setOpen] = useState(false);
  const [recipList, setrecipList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]) // o ([])significa que a lista vai iniciar vazia 
  console.log(recipList);

  const addRecipeToFavoriteList = (recipe) =>{
    // o some vai verificar se na favoriteList tem o algum ID que seja igual ao id de recipe.id
    // o some retorna um boolano, true ou false
    // o ! ta dizendo que se nao tiver ele vai fazer a ação do if que no caso é adicionar
    if(!favoriteList.some(favorite => favorite.id === recipe.id)){
      const newFavoriteList = [...favoriteList, recipe];
      setFavoriteList(newFavoriteList);
    } else{
      console.log("item ja favoritado")
    }


  }

  const removeRecipeFromFavoriteList = (favotiteId) =>{
    const newFavoriteList = favoriteList.filter(favorite => favorite.id !== favotiteId);
    setFavoriteList(newFavoriteList);
  }

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
    LoadRecip(); //puxar API e receber os codigos
  },[])

  return (
    <>
      <GlobalStyle />

        <button onClick={ () => setOpen(!isOpen) }> modal</button>
        { isOpen ? <Exemplo/> : null }{/*isOpen é true ? se for então renderize o exemplo se nao nao faça nada*/}
    
     
      <Header />
      <RecipeteList addRecipeToFavoriteList = {addRecipeToFavoriteList} recipList={recipList} />

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
