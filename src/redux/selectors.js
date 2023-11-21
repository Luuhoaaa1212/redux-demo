import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state)=> state.fillters.search;
export const statusFillterSelector = (state)=> state.fillters.status;
export const priorityFillterSelector = (state)=> state.fillters.priovity;
export const todoListSelector = (state)=> state.todoList;
// export function todoListSelector(state){
//     const todoRemaining = state.todoList.filter(todo => todo.name.includes(state.fillter.search));
//     return todoRemaining;
// }

export const todoRemainingSelector = createSelector(
    todoListSelector,
    statusFillterSelector,
    searchTextSelector,
    priorityFillterSelector,
    (todoList,status,searchText,prioriry) =>{
            return todoList.filter(todo =>{
                if(status === 'All'){
                   return prioriry.length ? todo.name.includes(searchText) &&
                   prioriry.includes(todo.prioriry) : todo.name.includes(searchText)
                }
                return (
                    todo.name.includes(searchText) &&
                    (status === 'Completed' ? todo.completed : !todo.completed) &&
                    (prioriry.length ? prioriry.includes(todo.prioriry) : true)
                )
            });
    })