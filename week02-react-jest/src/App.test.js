import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('jest test', function() {

   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
   });

   it('renders and reads H1 text', () => {
       const wrapper = shallow(<App />);
       const welcome = <h2>Welcome to React</h2>;
       expect(wrapper.contains(welcome)).toEqual(true);
   });
  it('renders button click message', () => {
     const wrapper = shallow(<App />);
     const nineSign = <p className="App-intro">Nine: 9</p>;
     wrapper.find('button.elf').simulate('click');
     expect(wrapper.contains(nineSign)).toEqual(true);
  });
});