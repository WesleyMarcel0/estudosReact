import './App.css'
import { Header } from './componentes/comp/index'
import { Footer } from './componentes/foot'
import {CardProduct} from './componentes/CardProduct'


function App() {

  return (
    <main>
      <Header />
      <h1>ola de novo</h1>
      <div>
        { /* passagem de propes */}
        <CardProduct productName = 'Banana' productWeight={20} />
        <CardProduct productName = 'Morango' productWeight={5} />
        <CardProduct productName = 'Uva' productWeight={10} />
      </div>
      <p>uahuihaiaih</p>
      <Footer />
    </main>
  )
}


export default App
