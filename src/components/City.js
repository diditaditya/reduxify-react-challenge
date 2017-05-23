import React from 'react';
import { connect } from 'react-redux';

class City extends React.Component {

    render() {
        let city = this.props.city;
        if(city) {
            return (
                <div className="container">
                    <h1> {city.name} </h1>
                    <p> lat: {city.coord.lat}, lon: {city.coord.lon} </p>
                    <hr/>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h3>Loading city data..</h3>                
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => {
    return ({
        city: state.openWeatherReducer.cityData
    });
}

export default connect(mapStateToProps, null)(City);