import Axios from 'axios';

import { SET_OWFC5DAYS, SET_OWFC16DAYS, SET_CITY } from "./constants";

const openWeatherAction = {
    setCity(cityData) {
        return {
            type: SET_CITY,
            payload: cityData
        }
    },
    setOWFC5DaysData(forecast) {
        return {
            type: SET_OWFC5DAYS,
            payload: forecast.list
        }
    },
    setOWFC16DaysData(forecast) {
        return {
            type: SET_OWFC16DAYS,
            payload: forecast.list
        }
    }
}

export const fetchOW5 = () => {
    console.log('fetchin..');
    let city = "Jakarta,ID";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8`;
    return dispatch => {
        console.log('just before returnin Axioz')
        return Axios.get(url)
        .then((response) => {
            dispatch(openWeatherAction.setOWFC5DaysData(response.data));
            dispatch(openWeatherAction.setCity(response.data.city));
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export const fetchOW16 = () => {
    let city = "Jakarta,ID";
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=16&APPID=8b8926b398fdba5ce76701d649c783f8`
    return dispatch => {
        return Axios.get(url)
        .then((response) => {
            dispatch(openWeatherAction.setOWFC16DaysData(response.data));
            dispatch(openWeatherAction.setCity(response.data.city));
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export default openWeatherAction;