import { createSlice } from "@reduxjs/toolkit";

const initValue = [
  {
    id: 1,
    name: "quét nhà",
    completed: false,
    prioriry: "Medium",
  },
  {
    id: 2,
    name: "chơi game",
    completed: false,
    prioriry: "High",
  },
  {
    id: 3,
    name: "học bài",
    completed: true,
    prioriry: "Low",
  },
];

// const todoListReducer = (state = initValue ,action) =>{
//     switch(action.type){
//         case 'todoList/addTodo':
//             return [...state, action.payload];
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? {...todo,completed : !todo.completed} : todo);
//         default:
//             return state;
//     }
// }
// export default todoListReducer;

//REDUX TOOLKIT
export default createSlice({
  name: "todoList",
  initialState: initValue,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodoStatus(state, action) {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo){
        currentTodo.completed = !currentTodo.completed; 
      } 
    },
  },
});
