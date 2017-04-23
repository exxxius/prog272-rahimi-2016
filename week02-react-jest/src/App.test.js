import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header'
import { shallow } from 'enzyme';
import Address from "./components/Address";
import addresses from './address-list';


describe('jest test', function() {

   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
   });

   it('renders and reads H2 text', () => {
       const wrapper = shallow(<Header />);
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
    const wrapper = shallow(<Address addressList={addresses}/>);
    const firstName = <p className="App-intro">firstName: unknown</p>;
    console.log(wrapper);                                                         
    expect(wrapper.contains(firstName)).toEqual(true);
});

it('renders button click message first name', () => {
     const wrapper = shallow(<Address addressList={addresses}/>);
     const firstName = <p className="App-intro">firstName: Edwin</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(firstName)).toEqual(true);
  });

//lastName===

it('renders and displays the default last name', () => {
    const wrapper = shallow(<Address addressList={addresses} />);
    const lastName = <p className="App-intro">lastName: unknown</p>;
    expect(wrapper.contains(lastName)).toEqual(true);
});

it('renders button click message lastName', () => {
     const wrapper = shallow(<Address addressList={addresses} />);
     const lastName = <p className="App-intro">lastName: Davis</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(lastName)).toEqual(true);
  });

//Street===

it('renders and displays the default Street', () => {
    const wrapper = shallow(<Address addressList={addresses} />);
    const Street = <p className="App-intro">Street: unknown</p>;
    expect(wrapper.contains(Street)).toEqual(true);
});

it('renders button click message Street', () => {
     const wrapper = shallow(<Address addressList={addresses} />);
     const Street = <p className="App-intro">Street: 2576 152nd AVE NE</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(Street)).toEqual(true);
  });

//City===

it('renders and displays the default City', () => {
    const wrapper = shallow(<Address addressList={addresses} />);
    const City = <p className="App-intro">City: unknown</p>;
    expect(wrapper.contains(City)).toEqual(true);
});

it('renders button click message City', () => {
     const wrapper = shallow(<Address addressList={addresses} />);
     const City = <p className="App-intro">City: Redmond</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(City)).toEqual(true);
  });

//State===

it('renders and displays the default State', () => {
    const wrapper = shallow(<Address addressList={addresses} />);
    const State = <p className="App-intro">State: unknown</p>;
    expect(wrapper.contains(State)).toEqual(true);
});

it('renders button click message State', () => {
     const wrapper = shallow(<Address addressList={addresses} />);
     const State = <p className="App-intro">State: WA</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(State)).toEqual(true);
  });

//Zip Code===

it('renders and displays the default Zip code', () => {
    const wrapper = shallow(<Address addressList={addresses} />);
    const Zip = <p className="App-intro">Zip: unknown</p>;
    expect(wrapper.contains(Zip)).toEqual(true);
});

it('renders button click message Zip', () => {
     const wrapper = shallow(<Address addressList={addresses} />);
     const Zip = <p className="App-intro">Zip: 98052</p>;
     wrapper.find('button.setAddress').simulate('click');
     expect(wrapper.contains(Zip)).toEqual(true);
  });
















});

