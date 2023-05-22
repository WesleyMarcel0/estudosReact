import { useState } from 'react'
import { Header } from './components/Header'
import { RecipeteList } from './components/ReciptList'
import { StyledButton } from './style/button'
import { GlobalStyle } from './style/global'

function App() {
 

  return (
    <>
      <GlobalStyle /> {/*aplicar no topo da aplicação*/}
      <Header />
      <RecipeteList />
      <StyledButton buttonSize= "big" buttonStyle="big" >

          alguma coisa

      </StyledButton>
      <StyledButton buttonSize= "mid" buttonStyle="mid">

          alguma coisa

      </StyledButton>

      <StyledButton buttonSize= "little" buttonStyle="little" >

         alguma coisa

      </StyledButton>

    </>
  )
}

export default App
