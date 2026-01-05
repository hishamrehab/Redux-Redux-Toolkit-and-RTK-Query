const redux= require("redux");
const createStore = redux.createStore;
const ORDER_PIZZA = "ORDER_PIZZA"
const ORDER_BURGER = "ORDER_BURGER"



function orderPizza() {
    return {
    type : ORDER_PIZZA,
}
}


function orderBurger() {
    return {
    type : ORDER_BURGER,
}
}


const initialState = {
    pizzaBase : 100,  
    burgerBuns: 200
}


const reducer = (state = initialState , action) => {
  switch(action.type) {
    case ORDER_PIZZA: 
    return {
        ...state,
        pizzaBase: state.pizzaBase - 1
    }
    case ORDER_BURGER: 
    return {
        ...state,
        burgerBuns: state.burgerBuns -1
    }
    default:
    return state
  }
}


const store = createStore(reducer);


console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));
store.getState();
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
unsubscribe();