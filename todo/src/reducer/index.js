//import my action types
import { ADD_ITEM } from '../actions';

//create an initialState
const initialState = {
    toDos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                toDos: [...state.toDos, action.payload]
            }
        default: 
            return state
    }
}