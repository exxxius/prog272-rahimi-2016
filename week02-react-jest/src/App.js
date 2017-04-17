import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          nine: '0',
          firstName: 'unknown'
      }
  }
getNine = () => {
   console.log('state');
   this.setState({nine: '9'})
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
	<p className="App-intro">Nine: {this.state.nine}</p>
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
        <button className='elf' onClick={this.getNine}>Get Nine</button>
        <button className="setAddress" onClick={this.setAddress}>Set Address</button>
        
      </div>
    );
  }
}

export default App;
