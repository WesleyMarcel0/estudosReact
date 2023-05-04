import { useState } from 'react'

import {CardProduct} from './componentes/CardProduct'
import { DefaultTemplate } from './template/DefaultTemplate'
import { RegisterProductForm } from './componentes/RegisterProductForm';


function App() {
 // let exemplo = '* valor inicial*'
 // const [variavel,funcaoModificadora] = useState (/*valor inicial*/)

 //exemplo: normlamente a funcao tem o nome de setnome da variavel
    const [count, setCount] = useState(0); //o state reconstroi o valor e coloca o valor de set

    function sum() {
      setCount(count + 1);
    }

    function sub(){
      setCount(count - 1);
    }

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
    productName: 'Morango', //  forma mais usado
    productWeight: 5,
    productCategory: 'frutas',
  }
];


  return (
    
      <DefaultTemplate> { /*agora não precisa de uma div para renderizar e ele ta fazendo html no react*/ }
          <h1>{count}</h1>
          <button onClick={sum}>+</button> {/*MEUUUUU DEUUUUUUS QUE FACIL*/}
          <button onClick={sub}>-</button>

        <ul>
          {categories.map(({label,slug},index)=> (
          <li key={slug} >
            {label} </li>))} {/*returno implicito*/}
        </ul>
        {/*no caso crio uma prop categorias e mando as categorias criadas la em cima
         da para mudar o nome por qualquer coisa*/}
        <RegisterProductForm categories={categories} />

          <ul>
         { fruitList.map(({productName,productWeight},index) =>{ //retorno digitado

             return (<CardProduct key={index}
                     productName = {productName} 
                     productWeight= {productWeight} 
                     />)

          } )}  
          </ul>
      </DefaultTemplate>
      
  
  )
}


export default App
