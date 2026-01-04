import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath : "products",
     baseQuery : fetchBaseQuery({
        baseUrl : "https://dummyjson.com"
     }),
     endpoints: (builder) => ({
        //   Get All Products (Reading)getAllProduct
        getAllProduct: builder.query({
            query: () => `/products`,
        }),
       getProductById : builder.query({
         query: (id) => `/products/${id}`
       }),
       addNewProduct : builder.mutation({
        query: (newProduct) => ({
         url : `/products/add`,
         method : "POST",
        headers: {
          "Content-type": "application/json"
        }, 
        body : newProduct
        }),
        }),
       
       updateProduct: builder.mutation({
         query: ({id , updateProduct }) => ({
          url : `/products/${id}`,
          method : "PUT",
          headers : {'Content-type' : 'application/json'},
          body : updateProduct,
         })
       }),
       deleteProduct: builder.mutation({
        query: (id) => ({
         url : `/products/${id}`,
         method : "DELETE",
       })
      })
     }),
});


// export const {  } = productsApi
export const { useGetAllProductQuery, 
  useGetProductByIdQuery ,
   useAddNewProductMutation , 
   useUpdateProductMutation ,
  useDeleteProductMutation
  } = productsApi;
