import {FETCH_DATA} from '../types/types';



const weatherReducer = (state = {}, action) => {
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