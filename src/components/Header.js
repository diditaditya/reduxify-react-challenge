import React from 'react';

import logo from '../logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.inputStyle = {
            'border-radius': '10px'
        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-default navbar-toggleable-md">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src={logo} className="App-logo navbar-brand" alt="logo"/>
                            <h1 className="navbar-brand text-right">React Weather</h1>
                        </div>

                        <div>
                            <form>
                                <input  type="text" placeholder="City name"/>
                                <span> </span>
                                <input className="btn btn-default"  type="submit" value="Search"/>
                            </form>
                        </div>


                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

