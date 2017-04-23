/**
 * Created by bcuser on 4/17/17.
 */
import React, { Component } from 'react';
import '../App.css';

class Address extends Component {
    constructor(props) {
        super(props);

     //   console.log('ADDRESS PROPS', typeof this.props);
        if (!this.props.addressList){
            throw new Error("NO PROPS IN ADDRESS!!!");
        }
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            Street: address.Street,
            City: address.City,
            State: address.State,
            Zip: address.Zip
        }
      //  console.log('this is test::: ' + this.props.addressList[0]);
    }


    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            Street: address.Street,
            City: address.City,
            State: address.State,
            Zip: address.Zip
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