import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { RecipeteList } from "./components/ReciptList";
import { StyledButton } from "./style/button";
import { DarkMode, GlobalStyle, LightMode } from "./style/global";
import { Exemplo } from "./components/exemplo";
import { FavoriteList } from "./components/FavoriteList";
import { api } from "./services/api";
import { Categories } from "./components/Categories";

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

    const[filter, setFilter] = useState('');

  const categories =[ // moque simples pq a API nao tinha uma rota que fornece as categorias
    {
      label:'Sushi',
      slug:'sushi',
    },
    {
      label:'HotDog',
      slug:'hotdog',
    },
    {
      label:'Pizza',
      slug:'pizza'
    }
  ]

  const filterRecipList = recipList.filter((recipe) => recipe.category === filter);

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
      const response = await api.get("recipes");
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
     
      <Header />
      <Categories categories={categories} setFilter={setFilter} filter={filter} />

      <RecipeteList
        addRecipeToFavoriteList={addRecipeToFavoriteList}
        recipList={recipList}
        filterRecipList={filterRecipList}
        filter={filter}
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
