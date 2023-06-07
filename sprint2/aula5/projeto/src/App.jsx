import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { NewFeed } from './components/NewFeed'
import { api } from './Services/api';
import { FavorityModal } from './components/CategoryList/FavorityModal';


function App() {
 
  const[newsList, setNewsList] = useState([]);
  const[favoritesList, setfavoritesList] = useState([]);
  const[categoriesList, setCategoriesList] = useState([]);
  const[isFavorityModalVisible, setIsFavorityModalVisible] = useState(false); //para abrir a lista de favoritos

  console.log(categoriesList);

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

  return (
    <>
        <Header setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} />
        <CategoryList categoriesList={categoriesList} />
        <NewFeed newsList={newsList} />
        {isFavorityModalVisible ? <FavorityModal /> : null}
      {/* se isFavorityModalVisible verdadeira ?= execute/renderize := caso contrario renderize/execute null*/}
    </>
  )
}

export default App
