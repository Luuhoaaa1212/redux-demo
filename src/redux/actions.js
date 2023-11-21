// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload : {
    
//     }
// }

///actions creators function
export const addTodo = (data) =>{
    return {
        type: 'todoList/addTodo',
        payload:data
    }
}
export const toggleTodoStatus = (todoId) =>{
    return {
        type: 'todoList/toggleTodoStatus',
        payload:todoId
    }
}

export const seachFillterChange = (text) =>{
    return {
        type: 'fillters/searchFillterChange',
        payload:text
    }
}

export const statusFillterChange = (status) =>{
    return {
        type: 'fillters/statusFillterChange',
        payload:status
    }
}
export const priorityFillterChange = (prioritys) =>{
    return {
        type: 'fillters/priorityFillterChange',
        payload:prioritys
    }
}