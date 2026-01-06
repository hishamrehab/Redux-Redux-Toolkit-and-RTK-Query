import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import BurgerReducer from "./burger/BurgerReducers";

const rootReducer = combineReducers({
    pizza : pizzaReducer,
    burger : BurgerReducer
})

export default rootReducer;