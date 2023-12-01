
const Cart = []

export const CartReducer = (state = Cart ,action)=>{
switch (action.type) {
    case "ADDCART":
        const arr = [...state]
        const index = arr.findIndex(item => item.id == action.payload.id)
        if(index == -1){
            arr.push(action.payload)
        }else{
            arr[index].quantity =  arr[index].quantity + 1
        }
        return arr;
    case "INCREASE":
        const arr1 = [...state]
        const index1 = arr1.findIndex(item => item.id == action.payload)
        arr1[index1].quantity = arr1[index1].quantity + 1
        return arr1
    case "DECREASE":
        const arr2 = [...state]
        const index2 = arr2.findIndex(item => item.id == action.payload)
        arr2[index2].quantity = arr2[index2].quantity - 1
        if(arr2[index2].quantity < 1){
            arr2[index2].quantity = 1
        }
        return arr2
    case "DELETE":
        const   arr3 = [...state]
        const result = arr3.filter(item => item.id != action.payload)
        return result
    default:
        return state;
}
}