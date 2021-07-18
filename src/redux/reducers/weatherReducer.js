import {FETCH_DATA} from '../types/types';


const weatherReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                today: action.payload.today.data,
                week: action.payload.week.data
            }
        default:
            return state;
    }
};

export default weatherReducer;