import { useState } from 'react'
import { Header } from './components/header'
import { FormListAdiction } from './components/FormListAdiction'
import { MoneyTotal } from './components/TotalMoney'
import { ListOfTransition } from './components/ListOfTransitions'


function App() {
 
  const [count, setCount] = useState(0);
  const [contaTotal, setContaTotal] = useState(0);
  const [listTransition, setListTransition] = useState([   { 
   id:1, description: "Salário recebido", type: "entrada", value: 2500 },
  { id:2, description: "Conta de luz", type: "saída", value: -150 }]);



  const addProductList = (formData) =>{
    iden();
    const newproduct = {...formData, id:count, value:Number(formData.value)};
    setListTransition([...listTransition,newproduct]);

    total();
  };

  const productRemoveList = (idprodu) => {
    const newproduct = listTransition.filter((product) =>{
        return product.id !== idprodu
    });
    setListTransition(newproduct);
    total();
  }


  const iden = () =>{
    const newcount = Number(count + 1);
    setCount(newcount);
  }

  const total = () =>{
    
    let conta = Number( listTransition.value );
    setContaTotal(conta);

  }

  console.log(contaTotal)
  
  return (
    <>
      <Header />
      <FormListAdiction listTransition={listTransition} setListTransition={setListTransition} addProductList={addProductList} />
      <MoneyTotal contaTotal={contaTotal} />
      <ListOfTransition listTransition={listTransition} productRemoveList={productRemoveList} />
     
    </>
  )
}

export default App
