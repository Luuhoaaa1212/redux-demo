
//REDUX CORE
// import { createStore } from 'redux'
// import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancer = composeWithDevTools();
// const store = createStore(rootReducer,composeEnhancer);

// export default store;

//REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit'
import fillterSlice from '../components/Filters/fillterSlice'
import todoSlice from '../components/TodoList/todoSlice'

const store = configureStore({
    reducer:{
        fillters : fillterSlice.reducer,
        todoList : todoSlice.reducer
    }

});
export default store;