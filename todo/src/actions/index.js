// Define the Action Types
export const ADD_ITEM = 'ADD_ITEM';

// Action Creators
export function addItem(value, completed = "false") {
    // The Action
    return {
        type: ADD_ITEM,
        payload: {
            value,
            completed
        }
    }
};