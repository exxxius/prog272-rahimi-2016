import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/SmallNumbers';
import {shallow} from 'enzyme';
import addresses from '../address-list';

describe('jest App test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        //console.log(wrapper);
        const welcome = <p className='App-intro'>Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className='App-intro'>Nine: 9</p>;
        wrapper.find('Button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});

