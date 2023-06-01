import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { RecipeteList } from "./components/ReciptList";
import { StyledButton } from "./style/button";
import { DarkMode, GlobalStyle, LightMode } from "./style/global";
import { Exemplo } from "./components/exemplo";
import { FavoriteList } from "./components/FavoriteList";
import { api } from "./services/api";

function App() {
  //atualização
  const favoriteLocalStore = localStorage.getItem("@FAVORITELIST");
  const darkModeLocalStorege = localStorage.getItem("@DARKMODE");
  const [isOpen, setOpen] = useState(false);
  const [recipList, setRecipList] = useState([]);

  const [favoriteList, setFavoriteList] = useState(
    favoriteLocalStore ? JSON.parse() : []
  ); // o ([])significa que a lista vai iniciar vazia

  const [darkMode, setDarkMode] = useState(
    darkModeLocalStorege ? darkModeLocalStorege : "FALSE"
  );

  useEffect(() => {
     localStorage.setItem("@DARKMODE", darkMode);
  }, [DarkMode]); //observar o darkmode

 

  // efeito de atualização
  useEffect(() => {
    localStorage.setItem("@FAVORITELIST", JSON.stringify(favoriteList));
  }, [favoriteList]); // lista de dependencias com uma ou mais montagens

  const changeColorMode = () => {
    setDarkMode(darkMode === "FALSE" ? "TRUE" : "FALSE");
  };

  const addRecipeToFavoriteList = (recipe) => {
    // o some vai verificar se na favoriteList tem o algum ID que seja igual ao id de recipe.id
    // o some retorna um boolano, true ou false
    // o ! ta dizendo que se nao tiver ele vai fazer a ação do if que no caso é adicionar
    if (!favoriteList.some((favorite) => favorite.id === recipe.id)) {
      const newFavoriteList = [...favoriteList, recipe];
      setFavoriteList(newFavoriteList);
    } else {
      console.log("item ja favoritado");
    }
  };

  const removeRecipeFromFavoriteList = (favotiteId) => {
    const newFavoriteList = favoriteList.filter(
      (favorite) => favorite.id !== favotiteId
    );
    setFavoriteList(newFavoriteList);
  };

  const LoadRecip = async () => {
    try {
        // o trycatch tenta executar o codigo linha a linha e caso de problema vai pro catch erro interrompendo a execução do try
        //o await faz esperar algo acontecer para voltar ali
        //const response = await fetch('');
        //por causa do fatch precisa converter para json // o fetch foi substituido pelo axious apartir da aula 3

      const response = await api.get("recipes"); // o axious ta comventendo para json e so precisa pegar o recipe
        //const json = await response.json();

      setRecipList(response.data); // por causa do axious preciso só esses dois code
    } catch (error) {
      console.log("erro");
    }
  };

  //efeito de montagem
  useEffect(() => {
    LoadRecip(); //puxar API e receber os codigos 1 vez, executar uma execução, GET, etc...
  }, []); // lista de dependencia vazia

  return (
    <>
      <GlobalStyle />
      {darkMode === "FALSE" ? <LightMode /> : <darkMode />}
      <button onClick={changeColorMode}>alterar modo de cor</button>
      <button onClick={() => setOpen(!isOpen)}>
        {" "}
        favoritos ({favoriteList.length}){" "}
      </button>

      <button onClick={() => setOpen(!isOpen)}> modal</button>
      {isOpen ? <Exemplo /> : null}
      {/*isOpen é true ? se for então renderize o exemplo se nao nao faça nada*/}

      <Header />
      <RecipeteList
        addRecipeToFavoriteList={addRecipeToFavoriteList}
        recipList={recipList}
      />
      {isOpen ? (
        <FavoriteList
          favoriteList={favoriteList}
          removeRecipeFromFavoriteList={removeRecipeFromFavoriteList}
          setOpen={setOpen}
        />
      ) : null}

      <StyledButton buttonSize="big" buttonStyle="big">
        alguma coisa
      </StyledButton>
      <StyledButton buttonSize="mid" buttonStyle="mid">
        alguma coisa
      </StyledButton>

      <StyledButton buttonSize="little" buttonStyle="little">
        alguma coisa
      </StyledButton>
    </>
  );
}

export default App;
