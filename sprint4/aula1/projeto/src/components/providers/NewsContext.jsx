import { createContext, useContext, useEffect, useState } from 'react' // 1 importar create context
import { api } from '../../Services/api';

export const NewsContext = createContext({}); // 2 criar variavel de context

// 3 criar componente de provider e trazer a logica nossa para dentro do provider

export const NewsProvider = ({children}) =>{ // obrigatorio receber a prop children

    const[newsList, setNewsList] = useState([]);
    const[search, setSearch] = useState('');
    const[filter, setFilter] = useState('');
  
  /*
    const searchAndFilteredResults = newsList.filter((currentNew) =>
       currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
       currentNew.category.toLowerCase().includes(search.toLowerCase())
       ); 
       busca por nome/ letra/ meio nome
  */
  
    const searchAndFilteredResults = newsList.filter(
      (currentNew) =>
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

    useEffect(() => {

        loadNews();
    
      },[]); // efeito de montagem

     
    return (
      // prop value vai agir como exportador
      <NewsContext.Provider
        value={{
          searchAndFilteredResults,
          newsList,
          search,
          setSearch,
          filter,
          setFilter,
        }}
      >
        {children}
      </NewsContext.Provider>
    );
   // não esquecer de envolver a parte do app ou da pagina que vai receber essas coisas
}

// 5 (opcional) criar um hook especifico paa o contexto e minimizar importações
export const useNewsContext = () => {
    const value = useContext(NewsContext);

    return value;
}

// export const useNewsContext = () => useContext(NewsContext); um jeito mais curto