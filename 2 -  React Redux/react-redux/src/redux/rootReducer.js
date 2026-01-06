import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import BurgerReducer from "./burger/BurgerReducers";
import productReducer from "./products/ProductsReducers";

const rootReducer = combineReducers({
    pizza : pizzaReducer,
    burger : BurgerReducer,
    product : productReducer
})

export default rootReducer;