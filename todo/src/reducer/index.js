//import my action types
import { ADD_ITEM } from '../actions';

//create an initialState
const initialState = {
    toDo: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                toDo: [...state.toDo, action.payload]
            }
        default: 
            return state
    }
}