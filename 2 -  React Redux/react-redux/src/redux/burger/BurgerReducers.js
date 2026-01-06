import { ORDER_BURGER } from "./BurgerTypes"

const initialState = {
    burgerBuns : 200
}

const  BurgerReducer = (state = initialState, action) => {
    switch(action.type){
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns : state.burgerBuns - 1
            }
      default : 
      return state
    }
} 

export default BurgerReducer;