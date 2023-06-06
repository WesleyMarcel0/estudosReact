import { useState } from 'react'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { NewFeed } from './components/NewFeed'


function App() {
 

  return (
    <>
        <Header  />
        <CategoryList  />
        <NewFeed />
    </>
  )
}

export default App
