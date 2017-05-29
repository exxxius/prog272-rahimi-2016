import React, {Component} from 'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';

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
                <Button bsStyle='primary' className='elf' onClick={this.getNine}>Get Nine</Button>
            </div>
        );
    };
}
export default SmallNumbers;
