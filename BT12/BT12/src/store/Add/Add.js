const initialState = [
    {
      name: "super car v1",
      price:20000,
      id: 1,
      quantity:10,
    }
];
export const Add =(state = initialState,action )=>{
    switch (action.type) {
        case "ADD":
            let arr = [...state]
            arr.push(action.payload)
            return arr;
        case "DELETE":
            let del = [...state]
            let result = del.filter(item => item.id != action.payload )
            return result
        case "EDIT":
            let edit = [...state]
            let resultEdit = edit.findIndex(item => item.id == action.id )
            edit[resultEdit].name = action.payload.name
            edit[resultEdit].price = action.payload.price
            edit[resultEdit].quantity = action.payload.quantity
            return edit
        default:
            return state
    }

}