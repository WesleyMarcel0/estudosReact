import { useState } from 'react'
import { Header } from './components/header'
import { FormListAdiction } from './components/FormListAdiction'
import { MoneyTotal } from './components/TotalMoney'
import { ListOfTransition } from './components/ListOfTransitions'


function App() {
 
  const [listTransition, setListTransition] = useState([]);

  const addProductList = (formData) =>{
    const newproduct = {...formData, value:Number(formData.value)};

    setListTransition([...listTransition,newproduct]);
  };

  


  return (
    <>
      <Header />
      <FormListAdiction listTransition={listTransition} setListTransition={setListTransition} addProductList={addProductList} />
      <MoneyTotal />
      <ListOfTransition listTransition={listTransition} />

      <p>
        jbusabusbuabsu {listTransition.id}
      </p>
     
    </>
  )
}

export default App
