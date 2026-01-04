const ORDER_PIZZA = "ORDER_PIZZA"

// Action 
// const action = {
//     type : ORDER_PIZZA,
//     shop_name : "Pizza Shop"
// }


// Action Creator
function orderPizza() {
    return {
    type : ORDER_PIZZA,
    shop_name : "Pizza Shop"
}
}

// Reducer
const initialState = {
    pizzaBase : 100,  
}


const reducer = (state = initialState , action) => {
  switch(action.type) {
    case ORDER_PIZZA: 
    return {
        ...state,
        pizzaBase: pizzaBase - 1
    }
    default:
    return state
  }
}


