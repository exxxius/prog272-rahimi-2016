/**
 * Created by bcuser on 4/17/17.
 */
import React, { Component } from 'react';
import '../App.css';

class Address extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown'
        }
    }


    setAddress = () => {
        this.setState({
            firstName: 'Edwin',
            lastName: 'Davis',
            Street: '152nd Ave NE',
            City: 'Redmond',
            State: 'WA',
            Zip: '98052'
        })
    };

    render() {
        return (
            <div className="Address">
                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>
                <p className="App-intro">
                    Street: {this.state.Street}
                </p>
                <p className="App-intro">
                    City: {this.state.City}
                </p>
                <p className="App-intro">
                    State: {this.state.State}
                </p>
                <p className="App-intro">
                    Zip: {this.state.Zip}
                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>

            </div>
        );
    }
}

export default Address;