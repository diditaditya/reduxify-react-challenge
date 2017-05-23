import { SET_OWFC5DAYS, SET_OWFC16DAYS, SET_CITY } from "./constants";


const initialState = {
    cityData: '',
    owData5Days: '',
    owData16Days: ''
};


const OpenWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OWFC5DAYS:
            state = {
                ...state,
                owData5Days: action.payload
            };
            break;
        case SET_OWFC16DAYS:
            state = {
                ...state,
                owData16Days: action.payload
            }
            break;
        case SET_CITY:
            state = {
                ...state,
                cityData: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
} ;



export default OpenWeatherReducer;