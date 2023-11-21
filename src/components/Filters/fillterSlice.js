
// const initValue ={
//         search:'',
//         status:'All',
//         priovity: []
// }

// const fillterReducer = (state = initValue ,action) =>{
//     switch(action.type){
//         case 'fillters/searchFillterChange':
//             return {
//                 ...state,
//                 search:action.payload 
//             }
//         case 'fillters/statusFillterChange':
//             return {
//                 ...state,
//                 status:action.payload 
//             }
//         case 'fillters/priorityFillterChange':
//             return {
//                 ...state,
//                 priovity:action.payload 
//             }
//         default:
//             return state;
//     }

// }
// export default fillterReducer;

//REDUX TOOKIT
import { createSlice } from "@reduxjs/toolkit"
export default createSlice({
    name :'fillters',
    initialState:{
        search:'',
        status:'All',
        priovity: []
    },
    reducers:{
        searchFillterChange: (state,action) => {
            //mutation
            state.search = action.payload
        },// => {type : 'fillters/searchFillterChange}
        statusFillterChange: (state,action) => {
            state.status = action.payload 
        },
    
        priorityFillterChange: (state,action) => {
            state.priovity = action.payload
        },
    }
})

