import axios from "axios"
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes"
export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}


export const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}


export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
       axios.get("https://fakestoreapi.com/products")
       .then(response => {
          const products = response.data.map(product => product);
          dispatch(fetchSuccess(products))
       })
       .catch(error => {
           dispatch(fetchError(error))
       })
    }
}