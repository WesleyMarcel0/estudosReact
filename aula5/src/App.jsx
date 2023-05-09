import { useState } from 'react';
import './styles/index.css';

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

const [darkMode, setdarkMode] = useState(false);

//  const [count, setCount] = useState(0); //id falso pq nao tenho uma API que me gera um valor unico
// BIBLIOTECA uuidv4

  const [productList, setproductList] = useState([]);

  const addProductToList = (formData) => {           {/* ele pega o WEIGHT e tranforma em nuemro*/}

    const newProduct = {...formData, id:uuidv4(), productWeight: Number(formData.productWeight)} ;

    setproductList([...productList, newProduct]) 
    {/*crio uma nova lista/ pego os valores da productList/ adicionou o novo newProduct*/}

    
    {/*o valor vai ser uma lista nova por isso o array
      tambem ele ta adicionando um novo produto*/}
  }

  const removeProductfromProductList = (productid) =>{ {/*retorna tudo menos o item escolhido para remover*/}

    const NewProductList = productList.filter((product) => {
    return product.id !== productid
    
  });

  setproductList(NewProductList); {/*como ja tem a lista criada ele so ta jogando a nova lista dentro*/}
}

  const editProductFromProductList = (productid ,productWeight) => {
    const NewProductList = productList.map((product) => {
      if (product.id === productid){
        return {...product, productWeight:Number(productWeight)};
        //abre o procut, pega productWeight e muda la em cima o ProcuctWeight

      } else { // o map ta pegando todos os item e caso ele não seja o que mexeu assim ele retona o produto intacto
        return product;
      }
    })
    // agora jogar a nova lista no valor
    setproductList(NewProductList);
  }

  return (
    
    <div className={darkMode ? 'darkMode' : 'lightMode'}>

      <DefaultTemplate> 
                {/* valor vai ser oposto ao darMode quando apertado, so funciona em true e false*/}
        <button onClick={() => setdarkMode(!darkMode)}>
          {darkMode ? 'Ir para Light Mode' : 'Ir para Dark Mode'}
        </button>
        <h1>Meu Estoque:</h1>
          <ListCategorys categories={categories}/>
          
                {/*cria a variavel para fazer a passagem de props*/}
          <RegisterProductForm categories={categories} addProductToList={addProductToList} />

          <LListproduct editProductFromProductList={editProductFromProductList} productList={productList} removeProductfromProductList={removeProductfromProductList} />

      </DefaultTemplate>
    </div>


      
  
  )
}


export default App
