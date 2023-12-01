const initialState = [
    {
      name: "run",
      age:"24",
      id: 1,
    },
    {
      name: "Home",
      age:"23",
      id: 2,
    },
];

export const Job = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let newJob = [...state]
            newJob.push(action.payload)      
      return newJob;
    case "DELETE":
       let newDelete = [...state]
       let resuld = newDelete.filter(item => item.id != action.payload )     
          return resuld;
    case "EDIT":    
        let arr = [...state]
        let index = arr.findIndex(item=>item.id == action.id)
        arr[index].name = action.payload.name
        arr[index].age = action.payload.age 
        return arr;
    default:
      return state;
  }
};
