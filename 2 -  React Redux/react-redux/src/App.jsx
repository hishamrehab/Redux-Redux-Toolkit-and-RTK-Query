import './App.css'
import PizzaBox from './components/PizzaBox'
import { Provider } from 'react-redux'
import store from './redux/store'
import HookContainer from './HooksContainer'
import BurgerBox from './components/BurgerBox'
import CustomerChoice from './components/CustomerChoice'
import ProductsContainer from './redux/products/ProductsContainer'



function App() {
  return (
    <Provider store={store}>
      {/* <PizzaBox /> */}
      {/* <HookContainer /> */}
      {/* <BurgerBox /> */}
      {/* <CustomerChoice /> */}
      <ProductsContainer />
    </Provider>
  )
}

export default App
