export const AddTodo = ({title, dic , edit , isComplete})=>{
    return {
        type: 'ADD_TODO',
        payload: {
            title: title,
            description: dic,
            edit, 
            isComplete,
            id : new Date().getTime().toString()
        }
    }
}

export const DeleteTodo = (id)=>{
    return {
        type: 'DELETE_TODO',
        payload: {
            id: id
        }
    }
}

export const EditTodo = (id)=>{
    return {
        type: 'EDIT_TODO',
        payload: {
            id: id,
            edit : true
        }
    }
}

export const EditComplete = (id , title , dic)=>{
    return {
        type: 'EDIT_COMPLETE',
        payload: {
            id: id,
            title : title,
            description : dic,
            edit : false
        }
    }
}

export const idCompleted = (id)=>{
    return {
        type: 'IS_COMPLETE',
        payload: {
            id: id,
            
            isComplete : false
        }
    }
}