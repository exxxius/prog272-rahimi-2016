import React, {Component} from 'react';
import '../css/App.css';

class SmallNumbers extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown'
        }
    };

    getNine = () => {
        console.log('state');
        this.setState({nine: '9'})
    };

    render() {
        return (
            <div className='App'>
                <p className='App-intro'>Nine: {this.state.nine}</p>
                <button className='elf' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    };
}

export default SmallNumbers;
