/**
 * Created by bcuser on 5/20/17.
 */
import React, {Component} from 'react';
import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';

class DataMaven extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ElfHeader />
                    <ElfMenu/>
                    <Route exact path='/' component={Address}/>
                    <Route path='/edit' render={(props) => (
                        <AddressEdit {...props}
                                     address={this.state.address}
                                     OnGetAddress={this.onAddressChange}
                                     onNameChange={this.onNameChange}
                                     OnFirstAddress={this.onFirstIndex}
                                     OnLastAddress={this.onLastIndex}
                                     OnPrevAddress={this.prevIndex}
                        />
                    )}/>
                    <Route path='/small' component={SmallNumbers}/>
                </div>
            </Router>
        );
    }
}
export default DataMaven;
