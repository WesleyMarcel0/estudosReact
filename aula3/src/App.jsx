import { useState } from 'react'
import './App.css'

import {CardProduct} from './componentes/CardProduct'
import { DefaultTemplate } from './template/DefaultTemplate'


function App() {
 // let exemplo = '* valor inicial*'
 // const [variavel,funcaoModificadora] = useState (/*valor inicial*/)

 //exemplo: normlamente a funcao tem o nome de setnome da variavel
    const [count, setCount] = useState(0);

    function sum() {
      setCount(count + 1);
    }

    function sub(){
      setCount(count - 1);
    }



  const fruitList = [
    {
      productName: 'Banana',
      productWeight: 20,

  },
  {
    productName: 'Uva',
    productWeight: 10,
  },
  {
    productName: 'Morango', //  forma mais usado
    productWeight: 5,
  }
];


  return (
    
      <DefaultTemplate> { /*agora não precisa de uma div para renderizar e ele ta fazendo html no react*/ }
          <h1>{count}</h1>
          <button onClick={sum}>+</button> {/*MEUUUUU DEUUUUUUS QUE FACIL*/}
          <button onClick={sub}>-</button>

         { fruitList.map(({productName,productWeight},index) =>{

             return (<CardProduct key={index}
                     productName = {productName} 
                     productWeight= {productWeight} 
                     />)

          } )}   
      </DefaultTemplate>
      
  
  )
}


export default App
