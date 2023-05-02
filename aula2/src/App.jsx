import './App.css'
import { Header } from './componentes/comp/index'
import { Footer } from './componentes/foot'
import {CardProduct} from './componentes/CardProduct'


function App() {

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
]

// map - le o resultado e retorna para cada item da lista (constroi um alista nova)

  return (
    <main>
      <Header />
      <h1>ola de novo</h1>
      <div>
        
        { fruitList.map(({productName,productWeight},index) =>{
          // o Key usado para identificar cada produto ja que o computador por si nao consegue
          //toda a lista precisa ter uma key e toda a key vai no começo
          return <CardProduct key={index} productName = {productName} productWeight= {productWeight} />
          // o map le a função e entra em um loop para cada item da lista
          //crio um lista nova para cada 

          // outra forma de fazer:
          // return (
          //  <li key={index}>
          //  <cardProduct>
          //  </li>
          //)
        } )}

        { /* passagem de propes */}
      {/*<CardProduct productName = 'Morango' productWeight={5} /> um jeito de fazer
        <CardProduct productName = 'Uva' productWeight={10} /> */}
      </div>
      <p>uahuihaiaih</p>
      <Footer />
    </main>
  )
}


export default App
