import  { useUpdateProductMutation } from "../app/service/dummyData"
const UpdateProduct = ({productId}) => {
 const [updateProduct , {data , error , isLoading }] = useUpdateProductMutation();

 if(error) {
 <h1>{error}</h1>
 }


  if(isLoading) {
    return <h1>Loading...</h1>
  }

 const handleUpdateProduct = async () => {
    try {
     const updatedProductData =  {
        title : "Title updated",
        description : "Description updated "
     }

     await updateProduct({
    id:productId,
       updateProduct: updatedProductData
     });
    }catch(error) {
      console.log(error);
    }
 }

  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>



        <button onClick={handleUpdateProduct} disabled={isLoading} >Update Product</button>
    </div>
  )
}

export default UpdateProduct