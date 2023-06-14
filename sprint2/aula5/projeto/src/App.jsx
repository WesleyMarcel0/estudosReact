import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { NewFeed } from './components/NewFeed'
import { api } from './Services/api';
import { FavorityModal } from './components/CategoryList/FavorityModal';
import { NewModal } from './components/CategoryList/NewModal';
import { GlobalStyles } from './styles/globalStyles';
import { StyledContainer } from './styles/grid';


function App() {
 
  const localStorageFavoriteList = localStorage.getItem('@FAVORITELIST');

  const[newsList, setNewsList] = useState([]);
  const[favoritesList, setfavoritesList] = useState(localStorageFavoriteList ? JSON.parse(localStorageFavoriteList): []);
  const[categoriesList, setCategoriesList] = useState([]);
  const[isFavorityModalVisible, setIsFavorityModalVisible] = useState(false); //para abrir a lista de favoritos
  const[currentSelectNew, setCurrentSelectNew] = useState(null);
  const[search, setSearch] = useState('');
  const[filter, setFilter] = useState('');

/*
  const searchAndFilteredResults = newsList.filter((currentNew) =>
     currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
     currentNew.category.toLowerCase().includes(search.toLowerCase())
     ); 
     busca por nome/ letra/ meio nome
*/

const searchAndFilteredResults = newsList.filter((currentNew) =>
  (currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
  currentNew.category.toLowerCase().includes(search.toLowerCase())) &&
  (filter === "" ? true : currentNew.category === filter)
);

  const loadNews = async() =>{
    try {
      const response = await api.get('/news');
  
      setNewsList(response.data);

    } catch (error) {
      console.log('erro');
    }
  }

  const loadCategories = async() =>{
    try {
      const response = await api.get('/categories'); // ler a documentação da api pra usar o metodo recomendado no caso esse a documentação diz para usar get
      setCategoriesList(response.data);

    } catch (error) {
      console.log('erro')
    }
  }

  useEffect(() => {

    loadNews();
    loadCategories();

  },[]); // efeito de montagem

  useEffect(()=>{
    localStorage.setItem('@FAVORITELIST', JSON.stringify(favoritesList))
  },[favoritesList]) //atualização

  const addNewToFavoriteList = (currentNew) =>{
   
      const newFavoriteList = [...favoritesList, currentNew];
      
      if(!favoritesList.some(favoriteNew => favoriteNew.id === currentNew.id)){
        setfavoritesList(newFavoriteList);

      } else {
        console.log('noticia ja favoritada')
      }
      
    
  }

  const removeNewfromFavoriteList = (currentNewId) =>{
    const newFavoriteList = favoritesList.filter(favoriteNew => favoriteNew.id !== currentNewId );
    setfavoritesList(newFavoriteList);
  }

  return (
    <>
        <GlobalStyles />
        <Header setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} setSearch={setSearch} />
      
        <CategoryList categoriesList={categoriesList} setFilter={setFilter} />
        <StyledContainer>
          
          <NewFeed newsList={newsList} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectNew={setCurrentSelectNew} searchAndFilteredResults={searchAndFilteredResults} search={search} setSearch={setSearch} filter={filter} />
        </StyledContainer>

       
        {isFavorityModalVisible ? <FavorityModal favoritesList={favoritesList} removeNewfromFavoriteList={removeNewfromFavoriteList}  /> : null}
      {/* se isFavorityModalVisible verdadeira ?= execute/renderize := caso contrario renderize/execute null*/}
        {currentSelectNew ? <NewModal currentSelectNew={currentSelectNew} setCurrentSelectNew={setCurrentSelectNew} /> : null}
    </>
  )
}

export default App
