import React from 'react';
import { Route, Link } from 'react-router-dom';
import FC5Days from './Forecast5Days';
import FC16Days from './Forecast16Days';

class WeatherList extends React.Component {

    render() {

        return (
                <div className="container">
                    <div>
                        <Link to="/"><button className="btn btn-primary">3-Hourly</button></Link>
                        <span> </span>
                        <Link to="/daily"><button className="btn btn-primary">Daily</button></Link>
                    </div>
                    <Route exact path="/" component={FC5Days} />
                    <Route path="/daily" component={FC16Days} />
                </div>
            );

    }
    
}

export default WeatherList;