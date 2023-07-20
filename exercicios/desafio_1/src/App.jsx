import { useState } from 'react'
import { Header } from './components/header'
import { FormListAdiction } from './components/FormListAdiction'
import { MoneyTotal } from './components/TotalMoney'
import { ListOfTransition } from './components/ListOfTransitions'


function App() {
 
  const [count, setCount] = useState(0);
  const [contaTotal, setContaTotal] = useState(0);
  const [listTransition, setListTransition] = useState([]);



  const addProductList = (formData) =>{
    iden();
    const newproduct = {...formData, id:count, value:Number(formData.value)};
    setListTransition([...listTransition,newproduct]);
    
  
  };

  const productRemoveList = (idprodu) => {
    const newproduct = listTransition.filter((product) =>{
        return product.id !== idprodu
    });
    setListTransition(newproduct);
    
  }


  const iden = () =>{
    const newcount = Number(count + 1);
    setCount(newcount);
  }

  let conta = listTransition.reduce(
    (acc , crv)=>{
      return(acc+crv.value)
    }, 0
  )


  console.log(listTransition.reduce(
    (acc , crv)=>{
      return(acc+crv.value)
    }, 0
  ))
  
  return (
    <>
      <Header />
      <FormListAdiction listTransition={listTransition} setListTransition={setListTransition} addProductList={addProductList} setContaTotal={setContaTotal} />
      <MoneyTotal contaTotal={contaTotal} />
      <ListOfTransition listTransition={listTransition} productRemoveList={productRemoveList} />
     
    </>
  )
}

export default App
