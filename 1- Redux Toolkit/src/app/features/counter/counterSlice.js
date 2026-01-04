import { createSlice }  from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : "counter",
    initialState :{ vlaue : 0},
    reducers: {
        increment:(state) => {
            //immer
            state.vlaue +=1;
        },
        decrement: (state) => {
            state.vlaue -=1
        }
    }
})

export const { increment , decrement} = counterSlice.actions;
export default counterSlice.reducer;