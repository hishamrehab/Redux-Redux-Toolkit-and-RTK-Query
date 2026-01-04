import {useGetAllProductQuery} from "../app/service/dummyData"

const AllProducts = () => {
  const {data , isError , isLoading  } = useGetAllProductQuery();
  console.log("data", data);

  if(isError) {
    return <h1>Error Occured</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
   {data?.products.map((product) => (
      <>
        <h1 key={product.id}>{product.title}</h1>
        <p>{product.description}</p>
      </>
   ))
}
    </div>
  )
}

export default AllProducts