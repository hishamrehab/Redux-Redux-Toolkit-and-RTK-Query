import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {increment , decrement } from "../app/features/counter/counterSlice"

const Counter = () => {
    // Read the data from the store
    const count = useSelector((state) => state.counter.value);
    console.log(count);
    //   Changing the data by sending actions to the store
   const dispatch =  useDispatch()
  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter