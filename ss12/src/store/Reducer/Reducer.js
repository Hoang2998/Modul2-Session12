
const initialState ={
    count:0,
}

export const reducer=( state = initialState , action)=>{
    switch (action.type){
        case "INCREASE":
            let newState = {...state,count:state.count + action.payload} 
        return newState;
        case "DECREASE":
            let newStatea = {...state,count:state.count - 1} 
        return newStatea;
        default:
        return state;
    }
 }