import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


type initialStateType = {
  id: number,
  title:string,
  price: number,
  description:string,
  category: string,
  image:string,
  rating: {
    rate: number,
    count: number
  }
}


export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (data,thunkAPI) => {
        console.log(thunkAPI,"thunk");
        
      const response = await fetch("https://fakestoreapi.com/products")
      return  await response.json()
    },
  )

const initialState:initialStateType[] = []

const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{
       removeProduct:(state,action)=>{
          return state.filter((pro)=>pro.id != action.payload.id) 
       }
    }, extraReducers: (builder) => {
         builder.addCase(fetchProducts.fulfilled, (state, action) => {
          return action.payload
        })
      },
})

export const{removeProduct} = productSlice.actions
export default productSlice.reducer;