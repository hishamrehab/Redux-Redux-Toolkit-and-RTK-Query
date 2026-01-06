import React, { useEffect } from 'react'
import { fetchProducts } from './ProductsActions'
import { connect } from 'react-redux'
const ProductsContainer = ({productsData, fetchProducts}) => {
  useEffect(() => {
       fetchProducts();
    console.log(productsData);
  },[fetchProducts, productsData]);
  
  
  return (
    <div>
     {productsData.loading && <p>Loading...</p>}               
     {productsData.error && <p>{productsData.error}</p>}               
     {productsData.products && <p>{productsData.products.map(product => product.title))}</p>}               
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productsData : state.product
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () =>  dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
