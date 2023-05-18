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
      <StyledButton>
        <span>
          alguma coisa
          <p>Teste1</p>
        </span>

      </StyledButton>
    </>
  )
}

export default App
