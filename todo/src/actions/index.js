// Define the Action Types
export const ADD_ITEM = 'ADD_ITEM';
export const ITEM_COMPLETION = 'ITEM_COMPLETION';

// Action Creators
export function addItem(value, completed = false) {
    // The Action
    return {
        type: ADD_ITEM,
        payload: {
            value,
            completed
        }
    }
};

export function itemCompletion(index, completedValue) {
    return {
        type: ITEM_COMPLETION,
        payload: {
            completedValue,
            index
        }
    }
};