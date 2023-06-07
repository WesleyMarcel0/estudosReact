import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { NewFeed } from './components/NewFeed'
import { api } from './Services/api';


function App() {
 
  const[newsList, setNewsList] = useState([]);
  const[favoritesList, setfavoritesList] = useState([]);
  const[categories, setCategories] = useState([]);

  console.log(categories);

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
      setCategories(response.data);

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
        <Header  />
        <CategoryList  />
        <NewFeed />
    </>
  )
}

export default App
