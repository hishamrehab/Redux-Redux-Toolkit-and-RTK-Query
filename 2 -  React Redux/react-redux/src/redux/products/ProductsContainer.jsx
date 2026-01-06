import React, { useEffect } from 'react'
import { fetchProducts } from './ProductsActions'
import { useDispatch, useSelector } from 'react-redux';

const ProductsContainer = () => {
const productsData =useSelector((state) => state.product);
 const dispatch = useDispatch();
  useEffect(() => {
       fetchProducts();
    dispatch(fetchProducts());
  },[]);
  
  
  return (
    <div>
     {productsData.loading && <p>Loading...</p>}               
     {productsData.error && <p>{productsData.error}</p>}               
     {productsData.products && <p>{productsData.products.map((product) => product.title)}</p>}               
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     productsData : state.product
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () =>  dispatch(fetchProducts())
//   }
// }

export default ProductsContainer;
