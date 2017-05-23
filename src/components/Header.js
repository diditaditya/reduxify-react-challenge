import React from 'react';
import { connect } from 'react-redux';

import openWeatherAction from '../store/openWeatherAction';
import { fetchOW5, fetchOW16 } from '../store/openWeatherAction';

import logo from '../logo.svg';
import openWeatherlogo from '../openweathermap.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.inputStyle = {
            borderRadius: '5px'
        },
        this.searchFormStyle = {
            float: 'right',
            marginTop: '25px'
        },
        this.brandTextStyle = {
            fontSize: '3em',
            fontWeight: 'bold',
            color: 'skyBlue'
        },
        this.state = {
            search: ''
        }
    }

    handleChange(city) {
        this.setState({
            search: city
        });
    }

    handleSubmit() {
        let city = this.state.search;
        alert(city);
        if(city.length > 0) {
            this.props.setCity(city);
            this.props.fetchOW5(city);
            this.props.fetchOW16(city);
            this.setState({
                search: ''
            });
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-default navbar-toggleable-md">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src={logo} className="App-logo navbar-brand" alt="logo"/>
                            <h1 className="navbar-brand text-right" style={this.brandTextStyle}>React Weather</h1>
                        </div>

                        <div style={this.searchFormStyle}>
                            <input value={this.state.search} onChange={(e) => this.handleChange(e.target.value)} style={this.inputStyle} type="text" placeholder="City name"/>
                            <button onClick={() => this.handleSubmit()}  className="btn btn-default">Search</button>
                        </div>


                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        search: (city) => dispatch(openWeatherAction.setSearchCity(city)),
        setCity: (city) => dispatch(openWeatherAction.setCity(city)),
        fetchOW5: (city) => dispatch(fetchOW5(city)),
        fetchOW16: (city) => dispatch(fetchOW16(city))
    });
}

export default connect(null, mapDispatchToProps)(Header);

