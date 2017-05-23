import React from 'react';
import { connect } from 'react-redux';

import openWeatherAction from '../store/openWeatherAction';
import { fetchOW16 } from '../store/openWeatherAction';

class FC16Days extends React.Component {

    render() {
        
        let weathers = this.props.weathers;

        if(weathers) {

            return (

                <div>

                    <h2>16-Day Daily Weather Forecast</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <td><b>Date</b></td>
                                <td><b>Forecast</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            { weathers.map((weather, index) => {
                                let today = new Date();
                                let dateTime = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() + index}`;
                                return (
                                    <tr key={index}>
                                        <td>{dateTime}</td>
                                        <td>{weather.weather[0].description}</td>
                                    </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                </div>
            
            );

        } else {
            return (
                <h3>Loading forecast data..</h3>
            );
        }


    }

    componentDidMount() {
        this.props.fetchOW16();
    }

}

const mapStateToProps = (state) => {
    return ({
        weathers: state.openWeatherReducer.owData16Days
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fillDailyForecast: (forecast) => dispatch(openWeatherAction.setOWFC16DaysData(forecast)),
        setCity: (city) => dispatch(openWeatherAction.setCity(city)),
        fetchOW16: () => dispatch(fetchOW16())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(FC16Days);

                