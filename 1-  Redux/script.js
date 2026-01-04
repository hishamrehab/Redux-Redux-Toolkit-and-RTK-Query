const redux= require("redux");
const createStore = redux.createStore;


// Action Type
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
        pizzaBase: state.pizzaBase - 1
    }
    default:
    return state
  }
}


// STORE
const store = createStore(reducer);

// 2-It exposes a method calld getState whick gives your application access to the current state im the store


console.log("Initial State", store.getState());

// 3 - Register linteners cia subscribe(listener)
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));
store.getState();
// 4 - Allows state to be updated via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
unsubscribe();