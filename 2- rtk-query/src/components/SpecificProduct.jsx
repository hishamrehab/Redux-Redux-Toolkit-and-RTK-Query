import {useGetProductByIdQuery} from "../app/service/dummyData"


const SpecificProduct = () => {
  const {data , isError  , isLoading} = useGetProductByIdQuery(1);
 console.log("data", data);

    if(isError) {
      return <h1>Error Occured</h1>
    }
  
    if(isLoading) {
      return <h1>Loading...</h1>
    }
  
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <h1>{data?.description}</h1>
    </div>
  )
}

export default SpecificProduct