const redux= require("redux");
const createStore = redux.createStore;

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";


// state 
const initialState = {
    loading : false,
    products: [],
    error:false
}

// Action
function fetchRequest() {
    return {
        type: FETCH_REQUEST
    }
}


function fetchSuccess(products) {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}


function fetchError() {
    return {
        type: FETCH_ERROR
    }
}


// Reducers
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
            case FETCH_SUCCESS:
            return {
              ...state,
              loading: false,
              products: action.payload,
              error: false
            }
            case FETCH_ERROR:
            return {
             ...state,
             loading: false,
             error: true   
            }
            default:
            return state
    }
}


// Creating Store
 
const store = createStore(reducer);

