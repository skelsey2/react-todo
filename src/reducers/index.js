// import {INCREMENT} from '../constants/actionTypes';

const initialState = { count:0 };

export const increment = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        default:
            return state;
    }
}