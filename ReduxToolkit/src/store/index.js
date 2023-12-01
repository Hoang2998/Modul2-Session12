// 1 khoi tao state : import createSlice
// 2 khoi tao reducer
// 3 khoi tao store
// 4 mang di dung


import {createSlice , configureStore} from '@reduxjs/toolkit'

const productState  = createSlice({
    name:"react-toolkit",
    initialState:{
        products:[
            {
                name: "cake",
                price: "5000",
                id:1
              },
              {
                name: "milk",
                price: "6000",
                id:2
              },
              {
                name: "coce",
                price: "4000",
                id:3
              },
              {
                name: "chocolate",
                price: "10000",
                id:4
              },
        ]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push({
                name: action.payload,
                price:15000
            })
        },
        deleteItem:(state,action)=>{
            let index =  state.products.findIndex(item=>item.id == action.payload)
            state.products.splice(index,1)
        },
        editItem:(state,action)=>{
            let index =  state.products.findIndex(item=>item.id == action.payload.idItem)
            state.products[index].name = action.payload.product
        }
    }
})
// xuat ra action
export const { addProduct, deleteItem , editItem} = productState.actions

console.log(productState);
// khoi tao reducer
const productReducer = productState.reducer

// khoi tao store
const store = configureStore({
    reducer:{
        productReducer,
    }
})

// xuat ra cho ung dung
export default store;