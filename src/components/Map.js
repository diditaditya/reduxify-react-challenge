import React from 'react';
import { connect } from 'react-redux';

const Map = (props) => {
    let lon = props.cityData.lon;
    let lat = props.cityData.lat;

    if(props.cityData) {

    } else {
        
    }

}

const mapStateToProps = (state) => {
    return ({
        cityData: state.openWeatherReducer.cityData
    });
}

export default  connect(mapStateToProps, null)(Map);