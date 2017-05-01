/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';

class Address extends Component {
    constructor() {
        super();

        this.addressIndex = 0;
        this.state = {
            address: addresses[this.addressIndex]
        }
    }

    getAddress = () => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        })
    };

    render() {
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    OnGetAddress={this.getAddress}
                />
            </div>
        );
    }
}
export default Address;