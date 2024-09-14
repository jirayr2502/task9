import { useEffect, useReducer } from 'react'
import './App.css'
import { initialState, ProductContext } from './context/context'
import { reducer } from './context/reducer'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
      dispatch({type: 'change/total'})
  }, [state.baskets])

  return (
    <>
    <h1>Online shop</h1>
    <div className='row'>
        <ProductContext.Provider value={{state, dispatch}} >
        <ProductList />
        <Basket />
        </ProductContext.Provider>
    </div>
    </>
  )
}

export default App
