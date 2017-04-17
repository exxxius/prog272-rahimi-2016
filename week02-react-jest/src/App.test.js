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

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

  it('renders button click message', () => {
     const wrapper = shallow(<App />);
     const nineSign = <p className="App-intro">Nine: 9</p>;
     wrapper.find('button.elf').simulate('click');
     expect(wrapper.contains(nineSign)).toEqual(true);
  });

// additional tests for all the address fields
//==================================

it('renders and displays the default first name', () => {
    const wrapper = shallow(<App />);
    const firstName = <p className="App-intro">firstName: unknown</p>;
    console.log(wrapper);                                                         
    expect(wrapper.contains(firstName)).toEqual(true);
});

it('renders button click message first name', () => {
     const wrapper = shallow(<App />);
     const firstName = <p className="App-intro">firstName: Edwin</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(firstName)).toEqual(true);
  });

//lastName===

it('renders and displays the default last name', () => {
    const wrapper = shallow(<App />);
    const lastName = <p className="App-intro">lastName: </p>;
    console.log(lastName);                              
    expect(wrapper.contains(lastName)).toEqual(true);
});

it('renders button click message lastName', () => {
     const wrapper = shallow(<App />);
     const lastName = <p className="App-intro">lastName: Davis</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(lastName)).toEqual(true);
  });

//Street===

it('renders and displays the default Street', () => {
    const wrapper = shallow(<App />);
    const Street = <p className="App-intro">Street: </p>;
    console.log(Street);                              
    expect(wrapper.contains(Street)).toEqual(true);
});

it('renders button click message lastName', () => {
     const wrapper = shallow(<App />);
     const Street = <p className="App-intro">Street: 152nd Ave NE</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(Street)).toEqual(true);
  });

//City===

it('renders and displays the default City', () => {
    const wrapper = shallow(<App />);
    const City = <p className="App-intro">City: </p>;
    console.log(City);                              
    expect(wrapper.contains(City)).toEqual(true);
});

it('renders button click message City', () => {
     const wrapper = shallow(<App />);
     const City = <p className="App-intro">City: Redmond</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(City)).toEqual(true);
  });

//State===

it('renders and displays the default State', () => {
    const wrapper = shallow(<App />);
    const State = <p className="App-intro">State: </p>;
    console.log(State);                              
    expect(wrapper.contains(State)).toEqual(true);
});

it('renders button click message State', () => {
     const wrapper = shallow(<App />);
     const State = <p className="App-intro">State: WA</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(State)).toEqual(true);
  });

//Zip Code===

it('renders and displays the default Zip code', () => {
    const wrapper = shallow(<App />);
    const Zip = <p className="App-intro">Zip: </p>;
    console.log(Zip);                              
    expect(wrapper.contains(Zip)).toEqual(true);
});

it('renders button click message Zip', () => {
     const wrapper = shallow(<App />);
     const Zip = <p className="App-intro">Zip: 98052</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(Zip)).toEqual(true);
  });
















});

