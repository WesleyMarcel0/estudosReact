import { useState } from 'react'
import './App.css'

import { DefaultTemplate } from './template/DefaultTemplate'
import { RegisterProductForm } from './componentes/RegisterProductForm';
import { v4 as uuidv4} from 'uuid';
import { ListCategorys } from './componentes/ListCategories';
import { LListproduct } from './componentes/ListProducts/index.jsx';


function App() {

  const categories = [
      {
        slug: "frutas",
        label:"Frutas",
      },     
       {
        slug: "legumes",
        label:"Legumes",
      },
      
    ];


  const fruitList = [
    {
      productName: 'Banana',
      productWeight: 20,
      productCategory: 'frutas',

  },
  {
    productName: 'Uva',
    productWeight: 10,
    productCategory: 'frutas',
  },
  {
    productName: 'Morango', 
    productWeight: 5,
    productCategory: 'frutas',
  }
];



//  const [count, setCount] = useState(0); //id falso pq nao tenho uma API que me gera um valor unico
// BIBLIOTECA uuidv4

  const [productList, setproductList] = useState([]);

  console.log(productList);

  const addProductToList = (formData) => {           {/* ele pega o WEIGHT e tranforma em nuemro*/}

    const newProduct = {...formData, id:uuidv4(), productWeight: Number(formData.productWeight)} ;

    setproductList([...productList, newProduct])

    
    {/*o valor vai ser uma lista nova por isso o array
      tambem ele ta adicionando um novo produto*/}
  }


  return (
    
      <DefaultTemplate> 
        <h1>Meu Estoque:</h1>
        <ListCategorys categories={categories}/>
        
              {/*cria a variavel para fazer a passagem de props*/}
        <RegisterProductForm categories={categories} addProductToList={addProductToList} />

         <LListproduct productList={productList} />

      </DefaultTemplate>
      
  
  )
}


export default App
