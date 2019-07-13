//import my action types
import { ADD_ITEM, ITEM_COMPLETION } from '../actions';

//create an initialState
const initialState = {
    toDos: [
        {
            value: 'Milk',
            completed: false
        },
        {
            value: 'Eggs',
            completed: true
        },
        {
            value: 'Flour',
            completed: false
        }
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                toDos: [...state.toDos, action.payload]
            }
        case ITEM_COMPLETION:
            const newArray = [...state.toDos];
            newArray[action.payload.index] = {
                ...newArray[action.payload.index],
                completed: action.payload.completedValue
            }
            return {
                toDos: newArray
            }
            // return state
        default: 
            return state
    }
}