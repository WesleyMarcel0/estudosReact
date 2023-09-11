import { useState } from 'react'
import { Header } from './components/header'
import { FormListAdiction } from './components/FormListAdiction'
import { MoneyTotal } from './components/TotalMoney'
import { ListOfTransition } from './components/ListOfTransitions'
import { useEffect } from 'react'


function App() {
 
  const [count, setCount] = useState(0);
  const [listTransition, setListTransition] = useState([]);
  const [contaTotal, setContaTotal] = useState(0);


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

  const continha =()=>{

   return ( listTransition.reduce(
    (acc , crv)=>{
      return(acc+crv.value)
    }, 0
    ) )
  }
  
/*
  console.log(
    listTransition.reduce(
      (acc , crv)=>{
        return(acc+crv.value)
    }, 0
  ))
*/

useEffect(()=>{

  setContaTotal(continha);;

},[listTransition])

  return (
    <>
      <Header />
      <FormListAdiction listTransition={listTransition} setListTransition={setListTransition} addProductList={addProductList}/>
      <MoneyTotal contaTotal={contaTotal} />
      <ListOfTransition listTransition={listTransition} productRemoveList={productRemoveList} />
     
    </>
  )
}

export default App
