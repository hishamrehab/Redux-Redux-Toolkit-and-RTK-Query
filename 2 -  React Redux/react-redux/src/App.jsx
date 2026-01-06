import './App.css'
import PizzaBox from './components/PizzaBox'
import { Provider } from 'react-redux'
import store from './redux/store'
import HookContainer from './HooksContainer'
import BurgerBox from './components/BurgerBox'

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
      {/* <HookContainer /> */}
      <BurgerBox />
    </Provider>
  )
}

export default App
