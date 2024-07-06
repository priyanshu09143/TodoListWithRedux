const initialState = {
    data : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [
                    ...state.data,{
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                        edit : action.payload.edit,
                        isComplete: action.payload.isComplete
                    }
                ]
                
            }
        case 'DELETE_TODO':
            return {
                ...state,
                data: state.data.filter(todo => todo.id!== action.payload.id)
            }


        case "EDIT_TODO":
            return {
               ...state,
                data: state.data.map(todo => {
                    if(todo.id === action.payload.id){
                        return {
                           ...todo,
                           title : "",
                           description : "",
                            edit : true
                        }
                    }else{
                        return todo
                    }
                })
            }

        case "EDIT_COMPLETE":
            return {
               ...state,
                data: state.data.map(todo => {
                    if(todo.id === action.payload.id){
                        return {
                           ...todo,
                           title : action.payload.title,
                           description : action.payload.description,
                            edit : false
                        }
                    }else{
                        return todo
                    }
                })
            }

            case "IS_COMPLETE":
                return{
                    ...state,
                    data: state.data.map(todo => {
                        if(todo.id === action.payload.id){
                            return {
                               ...todo,
                                isComplete :!todo.isComplete
                            }
                        }else{
                            return todo
                        }
                    })
                }

        default:
            return state;
    }
}

export default todoReducer