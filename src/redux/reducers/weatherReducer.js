import {FETCH_DATA} from '../types/types';

const initialState = {
    today: null,
    week: null
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                today: action.payload.today,
                week: action.payload.week
            }
        default:
            return state;
    }
};

export default weatherReducer;