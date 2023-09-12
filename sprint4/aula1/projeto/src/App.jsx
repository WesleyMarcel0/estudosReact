import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { NewFeed } from './components/NewFeed'
import { api } from './Services/api';
import { FavorityModal } from './components/CategoryList/FavorityModal';
import { NewModal } from './components/CategoryList/NewModal';
import { GlobalStyles } from './styles/globalStyles';
import { StyledContainer } from './styles/grid';
import { HeaderControls } from './components/Header/HeaderControls';
import { MobileCategoryList } from './components/CategoryList/mobile';
import { DesktopCategoryList } from './components/CategoryList/desktop/inde';


function App() {
 
  const localStorageFavoriteList = localStorage.getItem('@FAVORITELIST');

  
  const[favoritesList, setfavoritesList] = useState(localStorageFavoriteList ? JSON.parse(localStorageFavoriteList): []);
  const[categoriesList, setCategoriesList] = useState([]);
  const[isFavorityModalVisible, setIsFavorityModalVisible] = useState(false); //para abrir a lista de favoritos
  const[currentSelectNew, setCurrentSelectNew] = useState(null);




  const loadCategories = async() =>{
    try {
      const response = await api.get('/categories'); // ler a documentação da api pra usar o metodo recomendado no caso esse a documentação diz para usar get
      setCategoriesList(response.data);

    } catch (error) {
      console.log('erro')
    }
  }

  useEffect(() => {

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

  console.log('app carregou')

  return (
    <>
        <GlobalStyles />
        {/*-- compisição diminui o prop drilling e melhora a performace --*/}
        <Header>
          <HeaderControls setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} />
        </Header>
      
        <CategoryList 
          mobileList={<MobileCategoryList 
            categoriesList={categoriesList} 
          /> }

          desktopList={<DesktopCategoryList 
            categoriesList={categoriesList} 
          />}
         />

        <StyledContainer>
          
          <NewFeed 
            addNewToFavoriteList={addNewToFavoriteList} 
            setCurrentSelectNew={setCurrentSelectNew} />
        </StyledContainer>

       
        {isFavorityModalVisible ? <FavorityModal favoritesList={favoritesList} removeNewfromFavoriteList={removeNewfromFavoriteList}  /> : null}
      {/* se isFavorityModalVisible verdadeira ?= execute/renderize := caso contrario renderize/execute null*/}
        {currentSelectNew ? <NewModal currentSelectNew={currentSelectNew} setCurrentSelectNew={setCurrentSelectNew} /> : null}
    </>
  )
}

export default App
