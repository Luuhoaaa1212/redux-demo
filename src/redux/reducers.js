import { combineReducers } from "redux";
import fillterReducer from "../components/Filters/fillterSlice";
import todoListReducer from "../components/TodoList/todoSlice";


// const rootReducer = (state = {} ,action) =>{
//     return {
//         fillters : fillterReducer(state.fillters,action),
//         todoList : todoListReducer(state.todoList,action)
//     }
// }
const rootReducer = combineReducers({
    fillters : fillterReducer,
    todoList : todoListReducer
})

export default rootReducer;