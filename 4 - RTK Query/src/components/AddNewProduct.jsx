import { useAddNewProductMutation } from "../app/service/dummyData"


const AddNewProduct = () => {
    const [addNewProduct , { data , error , isLoading }] = useAddNewProductMutation();
    
  if(error) {
    return <h1>Error Occured</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

 const handleAddProduct = async () => {
    try {
   const newProductData = {
    id : 1 ,
    title: "Amazing T-Shirt",
    description: " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description."
   };
 
    await addNewProduct(newProductData)
    }catch(error) {
      console.log(error);
    }
 }


  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>

        <button 
        onClick={handleAddProduct}
         disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct